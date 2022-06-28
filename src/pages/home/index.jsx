import {
  MdClose,
  MdDarkMode,
  MdFilterListAlt,
  MdLightMode,
  MdShoppingCart,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { HomeCard } from "../../components/Cards";
import ProductModal from "../../components/Modal";
import { CartContext } from "../../providers/cartProvider";
import { DatabaseContext } from "../../providers/databaseProvider";
import { ThemeContext } from "../../providers/themeProvider";
import { Logo } from "../../styles/styles";
import {
  CartBtn,
  CartBtnNav,
  Display,
  Filters,
  MobFilterBtn,
  MobileFilters,
  Nav,
  Search,
} from "./style";

export default function Home() {
  const { products } = useContext(DatabaseContext);
  const { cart } = useContext(CartContext);
  const { setCurrentTheme, getOpositeTheme } = useContext(ThemeContext);

  const [toShow, setToShow] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    const savedData =
      JSON.parse(localStorage.getItem("@Kenzieshop:data")) || [];

    if (savedData.length > 0) setToShow([...savedData]);
    else setToShow([...products]);

    if (savedData.length > 0 || products.length > 0) setLoading(false);
  }, [products]);

  const cartQtty = Object.values(cart).reduce((a, b) => a + b, 0);

  const filters = [
    "all",
    ...Array.from(new Set(products.map((obj) => obj.category))).sort(
      (a, b) => a.length - b.length
    ),
  ];

  const navigate = useNavigate();

  const changeMode = () => {
    setCurrentTheme(getOpositeTheme());
  };

  const handleFilter = (str) => {
    setSearch("");
    if (str === "all") setToShow([...products]);
    else setToShow([...products.filter((obj) => obj.category === str)]);
  };

  const handleTags = (str) => {
    setSearch("");
    setToShow([...products.filter((obj) => obj.category.includes(str))]);
  };

  const handleSearch = (input) => {
    setSearch(input);
    if (input === "" || input === " ") setToShow([...products]);
    else {
      const conditioned = input.trim().toLowerCase();
      setToShow([
        ...products.filter(
          (obj) =>
            obj.title.toLowerCase().includes(conditioned) ||
            obj.description.toLowerCase().includes(conditioned) ||
            obj.category.toLowerCase().includes(conditioned) ||
            String(obj.price).includes(conditioned)
        ),
      ]);
    }
  };

  return (
    <>
      {showModal && (
        <ProductModal
          currentProduct={currentProduct}
          setShowModal={setShowModal}
        />
      )}
      <Nav>
        <div className="container">
          <Logo>Kenzieshop</Logo>
          <div className="nav__btns">
            <CartBtnNav
              disabled={cartQtty === 0}
              qtty={cartQtty}
              onClick={() => {
                navigate("./cart");
              }}
            >
              <MdShoppingCart />
            </CartBtnNav>
            <button className="nav__btns--theme" onClick={changeMode}>
              {getOpositeTheme() === "dark" ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
          <div className="nav__filters">
            <Filters>
              {filters?.map((str) => (
                <li
                  key={str}
                  onClick={() => {
                    handleFilter(str);
                  }}
                >
                  {str.slice(0, 1).toUpperCase() + str.slice(1)}
                </li>
              ))}
            </Filters>
            <Search
              type="text"
              value={search}
              placeholder="Search here..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <MobFilterBtn
              onClick={() => {
                setShowFilters(!showFilters);
              }}
            >
              {showFilters ? <MdClose /> : <MdFilterListAlt />}
            </MobFilterBtn>
            {showFilters && (
              <MobileFilters>
                {filters?.map((str) => (
                  <li
                    key={str}
                    onClick={() => {
                      handleFilter(str);
                    }}
                  >
                    {str.slice(0, 1).toUpperCase() + str.slice(1)}
                  </li>
                ))}
              </MobileFilters>
            )}
          </div>
          <CartBtn
            qtty={cartQtty}
            disabled={cartQtty === 0}
            onClick={() => {
              navigate("./cart");
            }}
          >
            <MdShoppingCart /> Cart
          </CartBtn>
        </div>
      </Nav>
      <div className="container">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <Display>
            {!!toShow.length ? (
              toShow?.map((product) => (
                <HomeCard
                  setCurrentProduct={setCurrentProduct}
                  setShowModal={setShowModal}
                  product={product}
                  filter={handleFilter}
                  tags={handleTags}
                  key={product.id}
                />
              ))
            ) : (
              <h2>No products found</h2>
            )}
          </Display>
        )}
      </div>
    </>
  );
}

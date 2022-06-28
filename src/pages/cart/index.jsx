import { useContext, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdClose, MdDarkMode, MdHome, MdLightMode } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

import { Btn, Logo } from "../../styles/styles";
import { Card, Display, Header, Main, Summary } from "./style";
import { DatabaseContext } from "../../providers/databaseProvider";
import { CartContext } from "../../providers/cartProvider";
import { ThemeContext } from "../../providers/themeProvider";

export default function Cart() {
  const { products } = useContext(DatabaseContext);
  const { cart, changeQuantity, removeFromCart } = useContext(CartContext);
  const { setCurrentTheme, getOpositeTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [showSummary, setShowSummary] = useState(false);

  const changeMode = () => {
    setCurrentTheme(getOpositeTheme());
  };

  const cartQtty = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartProducts = products.filter((obj) =>
    Object.keys(cart).includes(String(obj.id))
  );
  const cartTotal = cartProducts.reduce((total, obj) => {
    return (total += obj.price * cart[obj.id]);
  }, 0);

  if (cartQtty === 0) return <Navigate to="/" />;

  return (
    <>
      <Header>
        <div className="container">
          <Logo>Kenzieshop</Logo>
          <div className="header__btns">
            <button>
              <MdHome
                className="header__btn--home"
                onClick={() => {
                  navigate("/");
                }}
              />
            </button>
            <button className="header__btn--theme" onClick={changeMode}>
              {getOpositeTheme() === "dark" ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
          <Btn
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Btn>
        </div>
      </Header>
      <Main>
        <Display>
          <div className="container">
            {cartProducts?.map((product) => (
              <Card key={product.id}>
                <figure>
                  <img src={product.image} alt={product.title} />
                </figure>
                <div>
                  <h2>{product.title}</h2>
                  <div>
                    <small>Qtty.:</small>
                    <button
                      onClick={() => {
                        changeQuantity(product.id, +cart[product.id] - 1);
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={cart[product.id]}
                      onChange={(e) => {
                        changeQuantity(product.id, +e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        changeQuantity(product.id, +cart[product.id] + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.price)}
                  </p>
                  <button
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    <IoMdTrash />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Display>
        <Summary>
          {showSummary ? (
            <>
              <button
                onClick={() => {
                  setShowSummary(false);
                }}
              >
                <MdClose />
              </button>
              <div className="container">
                <h3>Cart Summary:</h3>
                <p>
                  Products: <span>{cartQtty}</span>
                </p>
                <p>
                  Total:{" "}
                  <span>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(cartTotal)}
                  </span>
                </p>
                <Btn>Buy</Btn>
              </div>
            </>
          ) : (
            <div className="container">
              <Btn
                onClick={() => {
                  setShowSummary(true);
                }}
              >
                See Cart Summary
              </Btn>
            </div>
          )}
        </Summary>
      </Main>
    </>
  );
}

import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose, MdShoppingCart } from "react-icons/md";

import { Btn } from "../../styles/styles";
import { ModalBG, Product } from "./style";
import { CartContext } from "../../providers/cartProvider";

export default function ProductModal({ currentProduct, setShowModal }) {
  const modal = useRef();
  const navigate = useNavigate();

  const { cart, addToCart } = useContext(CartContext);
  const cartProducts = Object.keys(cart).map((str) => +str);

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;

      if (!modal.current?.contains(target)) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setShowModal]);

  return (
    <ModalBG>
      <Product ref={modal}>
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          <MdClose />
        </button>
        <div>
          <figure>
            <img src={currentProduct.image} alt={currentProduct.title} />
          </figure>
        </div>
        <div>
          <h2>{currentProduct.title}</h2>
          <p>{currentProduct.description}</p>
          <div className="tags">
            <small>{currentProduct.category}</small>
          </div>
          <div>
            <Btn
              onClick={() => {
                addToCart(currentProduct.id);
              }}
            >
              Adicionar ao Carrinho
            </Btn>
            {cartProducts.length > 0 && (
              <Btn
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <MdShoppingCart />
              </Btn>
            )}
          </div>
        </div>
      </Product>
    </ModalBG>
  );
}

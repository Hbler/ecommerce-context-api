import { useContext } from "react";
import { MdAddShoppingCart, MdStar } from "react-icons/md";

import { HomeCardNode } from "./style";
import { CartContext } from "../../providers/cartProvider";

export const HomeCard = ({
  product,
  filter,
  setShowModal,
  setCurrentProduct,
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <HomeCardNode>
      <figure>
        <img
          src={product.image}
          alt={product.name}
          onClick={() => {
            setCurrentProduct(product);
            setShowModal(true);
          }}
        />
        <div>
          <p
            onClick={() => {
              filter(product.category);
            }}
          >
            {product.category.toUpperCase()}
          </p>
          <small>
            {product.rating.rate}
            <MdStar />
          </small>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            <MdAddShoppingCart />
          </button>
        </div>
      </figure>
    </HomeCardNode>
  );
};

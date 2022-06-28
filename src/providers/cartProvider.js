import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};
    setCart(savedCart);
  }, []);

  const addToCart = (id) => {
    const localCart =
      JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

    localCart[id] ? localCart[id]++ : (localCart[id] = 1);

    setCart({ ...localCart });
    localStorage.setItem("@Kenzieshop:cart", JSON.stringify(localCart));
  };

  const changeQuantity = (id, qtty = 1) => {
    const localCart =
      JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

    qtty === 0 ? delete localCart[id] : (localCart[id] = qtty);

    setCart({ ...localCart });
    localStorage.setItem("@Kenzieshop:cart", JSON.stringify(localCart));
  };

  const removeFromCart = (id) => {
    const localCart =
      JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

    delete localCart[id];

    setCart({ ...localCart });
    localStorage.setItem("@Kenzieshop:cart", JSON.stringify(localCart));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, changeQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

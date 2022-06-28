import { Routes as Switch, Route } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";

export default function Routes() {
  return (
    <Switch>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Switch>
  );
}

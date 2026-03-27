import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartPage from "./CartPage";
import OrdersPage from "./OrdersPage";
import ProductPage from "./ProductPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Products</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
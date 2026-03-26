import React from "react";
import CartPage from "./CartPage";
import OrdersPage from "./OrdersPage";

function App() {
  return (
    <div>
      <h1>Ecommerce App</h1>

      <CartPage />
      <hr />
      <OrdersPage />
    </div>
  );
}

export default App;
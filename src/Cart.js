import React, { useState } from "react";

const Cart = () => {
  const [user, setUser] = useState({
    cart: [
      { id: 1, name: "Shirt", price: 500 },
      { id: 2, name: "Shoes", price: 1200 },
      { id: 3, name: "Watch", price: 2000 },
    ],
  });

  // 🔥 DELETE FUNCTION
  const deleteFromCart = (productId) => {
    const updatedCart = user.cart.filter(
      (item) => item.id !== productId
    );

    setUser({
      ...user,
      cart: updatedCart,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {user.cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        user.cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => deleteFromCart(item.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
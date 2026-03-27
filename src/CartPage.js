import { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const userId = "123";

  const getCart = async () => {
    const res = await fetch(
      `http://localhost:5000/api/cart/${userId}`
    );
    const data = await res.json();
    setCart(data);
  };

  const handleOrder = async () => {
    const res = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();
    alert(data.message);

    getCart();
  };

  useEffect(() => {
    getCart();
  }, []);

  if (!cart) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Cart</h2>

      {cart.items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.items.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price} x {item.quantity}
            </p>
          ))}

          <button onClick={handleOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
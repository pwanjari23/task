import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const userId = "123";

  const fetchOrders = async () => {
    const res = await fetch(
      `http://localhost:5000/api/orders/${userId}`
    );
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order._id}>
            <h3>Total: ₹{order.totalAmount}</h3>

            {order.items.map((item, index) => (
              <p key={index}>
                {item.name} - {item.quantity}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersPage;
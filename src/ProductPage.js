import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "123",
        items: [
          {
            productId: "1",
            name: "T-Shirt",
            price: 500,
            quantity: 1,
          },
        ],
      }),
    });

    navigate("/cart"); 
  };

  return (
    <div>
      <h2>Product Page</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
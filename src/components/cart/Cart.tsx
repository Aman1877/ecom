import React from "react";
import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  console.log(cartItems);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: any) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </td>
              <td>
                <button onClick={() => console.log("Buy Item clicked")}>
                  Buy Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;

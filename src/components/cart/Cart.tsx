import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../models/product";
import { RiDeleteBinLine } from "react-icons/ri";
import { remove } from "../../store/cart/cart-slice";
import EmptyCart from "../../shared/components/emptyCart";

interface CartQtyTypes {
  id: number;
  qty: number;
  pricePerItem: number;
}

const Cart: React.FC = () => {
  const dispatch: any = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const [cartQty, setCartQty] = useState<CartQtyTypes[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  useEffect(() => {
    const initialCartQty: CartQtyTypes[] = cartItems.map((item: any) => ({
      id: item.id,
      qty: item.qty ? item.qty : 1,
      pricePerItem: item.price,
    }));
    setCartQty(initialCartQty);
  }, [cartItems]);

  const getTotalPrice = () => {
    let totalPrice: number = 0;
    cartQty.forEach((item) => {
      totalPrice += item.qty * item.pricePerItem;
    });
    return totalPrice.toFixed(2);
  };

  const findQuantityById = (id: number) => {
    const foundItem = cartQty.find((item) => item.id === id);
    return foundItem ? foundItem.qty : 1;
  };

  const handleQuantityChange = (id: number, newQty: number) => {
    const updatedCartQty = cartQty.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    );
    setCartQty(updatedCartQty);
  };

  const handleDelete = (productId: number) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <div className="text-center text-3xl font-bold border-b-2 pb-4 mt-20">
        <p>My Bag</p>
      </div>
      {cartItems.length > 0 && (
        <div className="grid grid-cols-8 text-center border-b-2 p-3 mb-3 font-bold">
          <div className="col-span-4">Items</div>
          <div className="col-span-1">Each</div>
          <div className="col-span-1">Quantity</div>
          <div className="col-span-1">Total</div>
        </div>
      )}

      <div>
        {cartItems &&
          cartItems.map((item: Product) => (
            <div
              className="grid grid-cols-8 py-2"
              key={item.id}
              onMouseEnter={() => setHoveredItemId(parseInt(item.id))}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div className="flex justify-center items-center m-2 col-span-1">
                <img
                  src={item.image}
                  alt="item image"
                  width={120}
                  height={100}
                />
              </div>
              <div className="col-span-3 mx-4">
                <div>
                  <h1 className="font-bold">{item.title}</h1>
                  <h1 className="text-sm">Category: {item.category}</h1>
                  <div className="flex gap-2 text-sm ">
                    <p>Rating : {item.rating.rate}</p>
                    <p>{item.rating.count} Reviews</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 mx-4">
                <p className="font-bold text-center">${item.price}</p>
              </div>
              <div className="col-span-1 mx-4">
                <div className="flex gap-2 justify-center items-center">
                  <button
                    className="bg-zinc-300 px-2 rounded-full"
                    onClick={() =>
                      handleQuantityChange(
                        parseInt(item.id),
                        Math.max(0, findQuantityById(parseInt(item.id)) - 1)
                      )
                    }
                    disabled={findQuantityById(parseInt(item.id)) === 1}
                  >
                    -
                  </button>
                  <span>{findQuantityById(parseInt(item.id))}</span>
                  <button
                    className="bg-zinc-300 px-2 rounded-full"
                    onClick={() =>
                      handleQuantityChange(
                        parseInt(item.id),
                        findQuantityById(parseInt(item.id)) + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-span-1 mx-4 text-center">
                <p className=" font-bold">
                  $
                  {(findQuantityById(parseInt(item.id)) * item.price).toFixed(
                    2
                  )}
                </p>
              </div>
              {hoveredItemId === parseInt(item.id) && (
                <div className="text-red-400 text-xl">
                  <RiDeleteBinLine
                    onClick={() => {
                      handleDelete(parseInt(item.id));
                    }}
                  />
                </div>
              )}
            </div>
          ))}
      </div>

      {cartItems.length > 0 && (
        <div className="grid grid-cols-8 border-t-2 text-center p-3 mb-3 font-bold">
          <div className="col-span-4">{cartItems.length} Items</div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1">${getTotalPrice()} Total</div>
        </div>
      )}

      {cartItems.length == 0 && (
        <h1 className="">
          <EmptyCart />
        </h1>
      )}
    </div>
  );
};

export default Cart;

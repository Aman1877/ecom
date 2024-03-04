import emptyCart from "../../assets/emptyCart.jpg";
const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <img src={emptyCart} alt="" width={250} />
      <h1 className="text-zinc-400 text-sm">
        There is nothing in your bag. Let's add some items.
      </h1>
    </div>
  );
};

export default EmptyCart;

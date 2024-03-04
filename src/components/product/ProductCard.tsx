import { Product } from "../../models/product";
import { add } from "../../store/cart/cart-slice";
import Button from "../../shared/components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/products/product-async-thunk";

const ProductCard = () => {
  const { products } = useSelector((state: any) => state.product);
  const { items } = useSelector((state: any) => state.cart);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const handleProductDetail = (productId: string) => {
    dispatch(fetchSingleProduct(productId));
    navigate("/productdetails");
  };

  const isProductInCart = (productId: string) => {
    return items.some((item: Product) => item.id === productId);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(add(product));
  };

  return (
    <div className="w-full grid grid-cols-4 mt-20">
      {products.map((product: Product, index: number) => (
        <div key={product.id} className="flex flex-col m-2 p-2 bg-[whitesmoke] rounded-lg">
          <div
            onClick={() => {
              handleProductDetail(product.id);
            }}
            className="flex justify-center items-center"
          >
            <Link to="#">
              <img
                className=" w-[190px] h-[190px] rounded-t-lg"
                src={product.image}
                alt={product.title}
              />
            </Link>
          </div>
          <div className="flex-1 my-2">
            <h5 className=" text-xl font-semibold tracking-tight">
              {product.title}
            </h5>
          </div>
          <div className="flex my-2">
            <div className="flex justify-center items-center">
              {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
            <div className="w-full flex justify-between">
              <div className="ml-2">{product.rating.rate}</div>
              <div>${product.price}</div>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              className="px-5 py-2.5"
              text="Add to wishlist"
              onClick={() => {
                console.log("AddToW");
              }}
            />
            {isProductInCart(product.id) ? (
              <Button
                className="px-5 py-2.5"
                text="Go to bag"
                onClick={() => {
                  navigate("/cart");
                }}
              />
            ) : (
              <Button
                className="px-5 py-2.5"
                text="Add to cart"
                onClick={() => {
                  handleAddToCart(product);
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

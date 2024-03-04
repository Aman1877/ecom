import { Layout } from "..";
import { Product } from "../../models/product";
import { add } from "../../store/cart/cart-slice";
import Button from "../../shared/components/Button";
import Loader from "../../shared/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { singleProduct, status, error } = useSelector(
    (state: any) => state.product
  );

  const { items } = useSelector((state: any) => state.cart);

  const handleAddToCart = (product: Product) => {
    dispatch(add(product));
  };
  const alreadyInCart = (productId: string) => {
    return items.some((item: Product) => item.id === productId);
  };

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "failed" && <div>error: {error}</div>}
      {status === "succeeded" && (
        <div>
          <Layout />
          <div className="flex flex-col md:flex-row gap-2 mt-24">
            <div className="md:w-1/2 flex justify-center">
              <img
                height={200}
                width={400}
                className=""
                src={singleProduct.image}
                alt={singleProduct.title}
              />
            </div>
            <div className="md:w-1/2 mt-10  mr-10">
              <h2 className="text-xl font-semibold">{singleProduct.title}</h2>
              <p className="text-gray-700 pt-3">{singleProduct.description}</p>
              <div className="flex items-center mt-3">
                {[...Array(Math.floor(singleProduct.rating.rate))].map(
                  (_, index) => (
                    <svg
                      key={index}
                      className="w-6 h-6 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  )
                )}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {singleProduct.rating.rate}
                </span>
              </div>
              <p className="text-gray-600 pt-2">{singleProduct.category}</p>
              <p className="text-gray-600 pt-2">
                {singleProduct.rating.count} reviews
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                ${singleProduct.price}
              </p>
              <div className="flex justify-between pt-5">
                {alreadyInCart(singleProduct.id) ? (
                  <Button
                    className="px-10 py-2.5"
                    text="Go to bag"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  />
                ) : (
                  <Button
                    className="px-10 py-2.5"
                    text="Add to cart"
                    onClick={() => {
                      handleAddToCart(singleProduct);
                    }}
                  />
                )}
                <Button
                  className="px-10 py-2.5"
                  text="Add to wishlist"
                  onClick={() => {
                    console.log("first");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

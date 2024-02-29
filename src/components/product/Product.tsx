import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/product-async-thunk";
import Loader from "../../shared/components/Loader";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const dispatch: any = useDispatch();
  const { status, error } = useSelector((state: any) => state.product);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "failed" && <div>Error: {error}</div>}
      {status === "succeeded" && <ProductCard />}
    </div>
  );
};

export default ProductList;

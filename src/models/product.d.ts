type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductState = {
  products: Product[];
  singleProduct?: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

export { ProductState, Product };

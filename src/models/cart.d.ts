type Item = {
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

type CartState = {
  items: Item[];
};

export { CartState, Item };

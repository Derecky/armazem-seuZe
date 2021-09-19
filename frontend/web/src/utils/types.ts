
export type Product = {
  id: number,
  name: string,
  description: string,
  category: Category,
  price: number,
  image: string,
  amount: number,
};

export type Category = {
  id: number,
  name: string,
};
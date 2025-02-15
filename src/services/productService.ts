import { Product } from '../types/pagination';

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products?limit=500");
  const data = await response.json();
  return data.products;
};

export const fetchProductsByPage = async (page: number, limit: number = 10): Promise<{
  products: Product[];
  total: number;
}> => {
  const skip = page * limit;
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const data = await response.json();
  return {
    products: data.products,
    total: data.total
  };
};

import { Product } from '../types/pagination';

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products?limit=500");
  const data = await response.json();
  return data.products;
};
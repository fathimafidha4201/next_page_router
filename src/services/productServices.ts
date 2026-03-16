import { fetchAPI } from "./serviceBase";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
  brand: string;
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await fetchAPI("/products");
  return data.products;
}

export async function getProductById(id: string | string[]): Promise<Product> {
  return fetchAPI(`/products/${id}`);
}
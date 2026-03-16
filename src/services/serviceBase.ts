const BASE_URL = "https://dummyjson.com";

export async function fetchAPI(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
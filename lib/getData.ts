import { Items } from "../type";

const getData = async () => {
  const res = await fetch("https://dummyapi.online/api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return new Promise<Items>((resolve) => {
    setTimeout(() => {
      resolve(res.json());
    }, 1000);
  });
};

export default getData;

// types.ts
export interface ICategory {
  id: number;
  name: string;
}

interface IProduct {
  id?: number;
  name: string;
  description?: string;
  price?: number;
  stock?: number;
  image: string[];
  category?: ICategory;
}

export default IProduct;

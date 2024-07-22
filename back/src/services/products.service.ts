import { IProduct } from "../dtos/productsDto";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find({
    relations: {
      category: true,
    },
  });
};

export const getProductId = async (itemId: number): Promise<Product | null> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return item;
};

export const addProductService = async (product: IProduct) => {
  const newProduct = ProductRepository.create(product);
  await ProductRepository.save(newProduct);
  return newProduct;
};

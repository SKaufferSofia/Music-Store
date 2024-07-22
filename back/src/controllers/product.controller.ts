import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  addProductService,
  getProductId,
  getProductsService,
} from "../services/products.service";
import { IProduct } from "../dtos/productsDto";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const checkProduct = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductId(Number(id));
    res.json(product);
  }
);

export const addProduct = catchedController(
  async (req: Request, res: Response) => {
    const productData: IProduct = req.body;
    const newProduct = await addProductService(productData);
    res.json(newProduct);
  }
);

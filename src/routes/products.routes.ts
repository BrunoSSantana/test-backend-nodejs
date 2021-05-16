import { Router } from "express";

import { createProductController } from "../modules/products/useCases/createProduct";
import { listproductsController } from "../modules/products/useCases/listProduct";
import { listproductsByUserController } from "../modules/products/useCases/listProductByUser";

const productsRoutes = Router();

productsRoutes.post("/", (request, response) => {
  return createProductController.handle(request, response);
});

productsRoutes.get("/", (request, response) => {
  return listproductsController.handle(request, response);
});

productsRoutes.get("/:user", (request, response) => {
  return listproductsByUserController.handle(request, response);
});

export { productsRoutes };

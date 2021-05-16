import { ProductsRepository } from "../../repositories/ProductsRepository";
import { ListProductsByUserController } from "./ListProductsByUserController";
import { ListproductsByUserUseCase } from "./ListProductsByUserUseCase";

const productsRepository = ProductsRepository.getInstance();
const listproductsUseCase = new ListproductsByUserUseCase(productsRepository);
const listproductsByUserController = new ListProductsByUserController(
  listproductsUseCase
);

export { listproductsByUserController };

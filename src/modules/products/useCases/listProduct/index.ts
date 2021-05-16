import { ProductsRepository } from "../../repositories/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListproductsUseCase } from "./ListProductsUseCase";

const productsRepository = ProductsRepository.getInstance();
const listproductsUseCase = new ListproductsUseCase(productsRepository);
const listproductsController = new ListProductsController(listproductsUseCase);

export { listproductsController };

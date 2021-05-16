import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repositories/Implementations/IProductsRepository";

class ListproductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  execute(): Product[] {
    const products = this.productsRepository.list();

    return products;
  }
}
export { ListproductsUseCase };

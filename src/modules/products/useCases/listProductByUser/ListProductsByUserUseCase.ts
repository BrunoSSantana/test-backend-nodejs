import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repositories/Implementations/IProductsRepository";

class ListproductsByUserUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  execute(user: string): Product[] {
    const productsUser = this.productsRepository.listByUser(user);

    return productsUser;
  }
}
export { ListproductsByUserUseCase };

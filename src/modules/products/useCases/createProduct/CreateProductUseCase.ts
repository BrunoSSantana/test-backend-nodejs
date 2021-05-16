import { IProductsRepository } from "../../repositories/Implementations/IProductsRepository";

interface IRequest {
  user: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute({ user, title, description, price, category }: IRequest): void {
    this.productsRepository.create({
      user,
      title,
      description,
      price,
      category,
    });
  }
}

export { CreateProductUseCase };

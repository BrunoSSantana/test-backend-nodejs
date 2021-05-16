import { Product } from "../../model/Product";

interface ICreateProductDTO {
  user: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface IProductsRepository {
  findByTitle(title: string): Product;
  list(): Product[];
  listByUser(user: string): Product[];
  create({ title, description, price, category }: ICreateProductDTO): void;
}

export { IProductsRepository, ICreateProductDTO };

import { Product } from "../model/Product";
import {
  IProductsRepository,
  ICreateProductDTO,
} from "./Implementations/IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private Products: Product[];

  private static INSTANCE: ProductsRepository;

  private constructor() {
    this.Products = [];
  }

  public static getInstance(): ProductsRepository {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }
    return ProductsRepository.INSTANCE;
  }

  create({
    user,
    title,
    description,
    price,
    category,
  }: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      title,
      description,
      price,
      user,
      category,
      created_at: new Date(),
    });

    this.Products.push(product);
  }

  list(): Product[] {
    return this.Products;
  }

  listByUser(user: string): Product[] {
    const usersProducts = this.Products.filter(
      (product) => product.user === user
    );
    return usersProducts;
  }

  findByTitle(title: string): Product {
    const product = this.Products.find((Product) => Product.title === title);
    return product;
  }
}

export { ProductsRepository };

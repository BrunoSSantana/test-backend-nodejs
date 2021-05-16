import { Request, Response } from "express";

import { ListproductsByUserUseCase } from "./ListProductsByUserUseCase";

class ListProductsByUserController {
  constructor(private listProductsUseCase: ListproductsByUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user } = request.params;
    const productsUser = this.listProductsUseCase.execute(user);

    return response.json(productsUser);
  }
}

export { ListProductsByUserController };

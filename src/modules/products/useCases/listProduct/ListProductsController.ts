import { Request, Response } from "express";

import { ListproductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  constructor(private listProductsUseCase: ListproductsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listProductsUseCase.execute();

    return response.json(all);
  }
}

export { ListProductsController };

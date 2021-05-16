import { Request, Response } from "express";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user, title, description, price, category } = request.body;

    this.createProductUseCase.execute({
      user,
      title,
      description,
      price,
      category,
    });

    return response.status(201).send();
  }
}

export { CreateProductController };

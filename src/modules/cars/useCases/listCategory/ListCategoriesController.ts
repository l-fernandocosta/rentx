import { Request, Response } from "express";
import { Category } from "../../model/Category";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();

    return response.status(201).send(allCategories);
  }
}

export { ListCategoriesController };

import { Response, Request } from "express";
import { ListCategoriesUseCase } from "../listCategory/ListCategoriesUseCase";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const listSpecifications = this.listSpecificationUseCase.execute();

    return response.status(201).json(listSpecifications);
  }
}

export { ListSpecificationController };

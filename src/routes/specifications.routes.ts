import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

export { specificationRoutes };

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const specificationServices = new CreateSpecificationService(
    specificationRepository
  );

  specificationServices.execute({ name, description });

  return response.status(201).json({ message: "Criado com sucesso ! ✌️" });
});

export { specificationRoutes };

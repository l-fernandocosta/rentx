import { Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoriesAlreadyExists = categoriesRepository.findByName(name);

  if (categoriesAlreadyExists) {
    return response.status(400).json({ error: "Categoria já existente" });
  }

  categoriesRepository.createCategory({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.getCategories();
  return response.status(200).send(allCategories);
});

export { categoriesRoutes };

import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.getCategories();
  return response.status(200).json({ categories: allCategories });
});

export { categoriesRoutes };

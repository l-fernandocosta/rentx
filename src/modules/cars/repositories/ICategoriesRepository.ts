import { Category } from "../model/Category";
import { CategoriesRepository } from "./CategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findCategoryByName(name: string): Category;
  getCategories(): Category[];
  createCategory({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };

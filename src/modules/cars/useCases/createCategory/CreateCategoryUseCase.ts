import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoriesAlreadyExists =
      this.categoriesRepository.findCategoryByName(name);

    if (categoriesAlreadyExists) {
      throw new Error("Category already exists 😒");
    }
    this.categoriesRepository.createCategory({ name, description });
  }
}

export { CreateCategoryUseCase };

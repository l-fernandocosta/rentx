import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findSpecificationByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists 😒");
    }

    this.specificationRepository.createSpecification({ name, description });
  }
}

export { CreateSpecificationUseCase };

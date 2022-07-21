import { Specification } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/SpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    const allSpecifications = this.specificationRepository.getSpecifications();
    return allSpecifications;
  }
}

export { ListSpecificationUseCase };

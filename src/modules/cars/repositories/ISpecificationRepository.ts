import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  createSpecification({ name, description }: ICreateSpecificationDTO): void;
  findSpecificationByName(name: string): Specification;
}

export { ICreateSpecificationDTO, ISpecificationRepository };

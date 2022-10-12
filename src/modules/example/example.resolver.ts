import { Query, Resolver } from "type-graphql";
import { ExampleObject } from "./example.type";
import { ExampleService } from "./example.service";
import { inject, injectable } from "tsyringe";

@injectable()
@Resolver(() => ExampleObject)
export class ExampleResolver {
  constructor(
    @inject(ExampleService) private readonly exampleService: ExampleService
  ) {}

  @Query(() => ExampleObject)
  async example(): Promise<ExampleObject> {
    return this.exampleService.example();
  }
}

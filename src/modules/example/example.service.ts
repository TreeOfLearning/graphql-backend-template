import { ExampleObject } from "./example.type";
import { injectable } from "tsyringe";

@injectable()
export class ExampleService {
  async example(): Promise<ExampleObject> {
    const ret = new ExampleObject();
    ret.exampleField = "Example!!";

    return ret;
  }
}

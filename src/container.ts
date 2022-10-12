import { container } from "tsyringe";
import { ContainerType, ResolverData } from "type-graphql";

class TSyringeContainer implements ContainerType {
  get(token: any, resolverData: ResolverData<any>): any {
    return container.resolve<typeof token>(token);
  }
}

export default TSyringeContainer;

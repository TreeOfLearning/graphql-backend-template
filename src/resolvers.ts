import { ExampleResolver } from "./modules/example/example.resolver";
import { NonEmptyArray } from "type-graphql";

const Resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  ExampleResolver,
];

export default Resolvers;

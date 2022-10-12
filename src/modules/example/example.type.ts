import { Field, ObjectType } from "type-graphql";
import { GraphQLString } from "graphql";

@ObjectType()
export class ExampleObject {
  @Field(() => GraphQLString)
  exampleField!: string;
}

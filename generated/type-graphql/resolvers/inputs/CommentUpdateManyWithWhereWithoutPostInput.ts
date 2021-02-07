import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyMutationInput } from "../inputs/CommentUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => CommentScalarWhereInput, {
    nullable: false
  })
  where!: CommentScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentUpdateManyMutationInput;
}

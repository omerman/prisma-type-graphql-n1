import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentUpdateWithoutPostInput } from "../inputs/CommentUpdateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutPostInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutPostInput, {
    nullable: false
  })
  create!: CommentCreateWithoutPostInput;
}

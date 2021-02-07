import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  info!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCommentsInput;
}

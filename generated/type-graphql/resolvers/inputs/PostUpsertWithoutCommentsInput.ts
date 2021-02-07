import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: PostCreateWithoutCommentsInput;
}

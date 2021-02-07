import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PostCreateOrConnectWithoutcommentsInput } from "../inputs/PostCreateOrConnectWithoutcommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: PostCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutcommentsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutcommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}

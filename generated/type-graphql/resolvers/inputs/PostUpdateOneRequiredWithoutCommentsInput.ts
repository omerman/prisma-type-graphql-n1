import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PostCreateOrConnectWithoutcommentsInput } from "../inputs/PostCreateOrConnectWithoutcommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";
import { PostUpsertWithoutCommentsInput } from "../inputs/PostUpsertWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpdateOneRequiredWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: PostCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutcommentsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutcommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: PostUpdateWithoutCommentsInput | undefined;
}

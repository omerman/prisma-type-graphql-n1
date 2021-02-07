import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommentCreateOrConnectWithoutpostInput } from "../inputs/CommentCreateOrConnectWithoutpostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutpostInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutpostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}

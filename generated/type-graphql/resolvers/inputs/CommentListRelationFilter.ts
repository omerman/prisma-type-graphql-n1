import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentListRelationFilter {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  every?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  some?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  none?: CommentWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { IntFilter } from "../inputs/IntFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentWhereInput {
  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true
  })
  AND?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true
  })
  OR?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereInput], {
    nullable: true
  })
  NOT?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  info?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}

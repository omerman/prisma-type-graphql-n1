import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostRelationFilter {
  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  is?: PostWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  isNot?: PostWhereInput | undefined;
}

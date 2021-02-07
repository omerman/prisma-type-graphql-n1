import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  info!: string;
}

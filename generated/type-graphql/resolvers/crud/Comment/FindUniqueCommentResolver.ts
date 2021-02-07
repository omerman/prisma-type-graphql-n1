import * as TypeGraphQL from "type-graphql";
import { FindUniqueCommentArgs } from "./args/FindUniqueCommentArgs";
import { Comment } from "../../../models/Comment";

@TypeGraphQL.Resolver(_of => Comment)
export class FindUniqueCommentResolver {
  @TypeGraphQL.Query(_returns => Comment, {
    nullable: true
  })
  async comment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.findUnique(args);
  }
}

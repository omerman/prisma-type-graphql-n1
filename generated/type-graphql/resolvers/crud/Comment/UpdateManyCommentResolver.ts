import * as TypeGraphQL from "type-graphql";
import { UpdateManyCommentArgs } from "./args/UpdateManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";

@TypeGraphQL.Resolver(_of => Comment)
export class UpdateManyCommentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommentArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.comment.updateMany(args);
  }
}

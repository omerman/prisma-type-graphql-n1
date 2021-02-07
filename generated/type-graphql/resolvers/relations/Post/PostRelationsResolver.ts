import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { PostCommentsArgs } from "./args/PostCommentsArgs";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostCommentsArgs): Promise<Comment[]> {
    return ctx.prisma.post.findUnique({
      where: {
        id: post.id,
      },
    }).comments(args);
  }
}

import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommentArgs } from "./args/AggregateCommentArgs";
import { CreateCommentArgs } from "./args/CreateCommentArgs";
import { DeleteCommentArgs } from "./args/DeleteCommentArgs";
import { DeleteManyCommentArgs } from "./args/DeleteManyCommentArgs";
import { FindFirstCommentArgs } from "./args/FindFirstCommentArgs";
import { FindManyCommentArgs } from "./args/FindManyCommentArgs";
import { FindUniqueCommentArgs } from "./args/FindUniqueCommentArgs";
import { UpdateCommentArgs } from "./args/UpdateCommentArgs";
import { UpdateManyCommentArgs } from "./args/UpdateManyCommentArgs";
import { UpsertCommentArgs } from "./args/UpsertCommentArgs";
import { Comment } from "../../../models/Comment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateComment } from "../../outputs/AggregateComment";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentCrudResolver {
  @TypeGraphQL.Query(_returns => Comment, {
    nullable: true
  })
  async comment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Comment, {
    nullable: true
  })
  async findFirstComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCommentArgs): Promise<Comment[]> {
    return ctx.prisma.comment.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: false
  })
  async createComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommentArgs): Promise<Comment> {
    return ctx.prisma.comment.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: true
  })
  async deleteComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: true
  })
  async updateComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCommentArgs): Promise<Comment | null> {
    return ctx.prisma.comment.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommentArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.comment.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommentArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.comment.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: false
  })
  async upsertComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCommentArgs): Promise<Comment> {
    return ctx.prisma.comment.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateComment, {
    nullable: false
  })
  async aggregateComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommentArgs): Promise<AggregateComment> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          // remove __typename and others
          .filter(([key, value]) => !key.startsWith("__"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.comment.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}

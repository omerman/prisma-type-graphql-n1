import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { CommentCreateOrConnectWithoutpostInput } from "../inputs/CommentCreateOrConnectWithoutpostInput";
import { CommentCreateWithoutPostInput } from "../inputs/CommentCreateWithoutPostInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutPostInput } from "../inputs/CommentUpdateManyWithWhereWithoutPostInput";
import { CommentUpdateWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutPostInput";
import { CommentUpsertWithWhereUniqueWithoutPostInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutPostInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutPostInput], {
    nullable: true
  })
  create?: CommentCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutpostInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutpostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}

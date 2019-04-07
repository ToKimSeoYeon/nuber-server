// import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: any[] = fileLoader(path.join(__dirname, "./api/**/*.graphql"));
// 컴파일 하면 에러가 나서 일단 GraphQLSchema대신 any로 둠

const allResolvers: any[] = fileLoader(
  // 컴파일 하면 에러가 나서 일단 String 대신 any로 둠
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

export default schema;

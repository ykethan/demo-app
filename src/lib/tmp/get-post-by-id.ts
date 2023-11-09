import { data } from "../data";
import * as queries from "../../data/queries";
import type { Schema } from "../../../amplify/data/resource";

/**
 * temporary function to get post by id with api key
 */
export async function getPostById(id: string) {
  const {
    data: { getPost: post },
  } = await data.graphql({
    query: queries.getPost,
    variables: { id },
    authMode: "apiKey",
  });
  return post as Schema["Post"];
}

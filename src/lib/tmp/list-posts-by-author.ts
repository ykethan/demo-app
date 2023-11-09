import { data } from "../data";
import * as queries from "../../data/queries";
import type { Schema } from "../../../amplify/data/resource";

/**
 * temporary function to get post by author with api key
 */
export async function listPostsByAuthor(author: string) {
  const {
    data: { listPosts: posts, nextToken: next },
  } = await data.graphql({
    query: queries.listPosts,
    variables: { author },
    authMode: "apiKey",
  });
  return { posts, next } as { posts: Schema["Post"][]; next: string | null };
}

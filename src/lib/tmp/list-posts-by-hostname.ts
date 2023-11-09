import { data } from "../data";
import * as queries from "../../data/queries";
import type { Schema } from "../../../amplify/data/resource";

/**
 * temporary function to get post by hostname with api key
 */
export async function listPostsByHostname(hostname: string) {
  const {
    data: { listPosts: posts, nextToken: next },
  } = await data.graphql({
    query: queries.listPosts,
    variables: { hostname },
    authMode: "apiKey",
  });
  return { posts, next } as { posts: Schema["Post"][]; next: string | null };
}

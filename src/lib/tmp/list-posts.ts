import { data } from "../data";
import * as queries from "../../data/queries";
import type { Schema } from "../../../amplify/data/resource";

export type Posts = Schema["Post"][];

/**
 * temporary function to list posts with api key
 */
export async function listPosts(
  nextToken: string | undefined = undefined,
  limit: number = 30
): Promise<{ posts: Posts; next: string | null }> {
  const {
    data: {
      listPosts: { items, nextToken: returnedNextToken },
    },
  } = await data.graphql({
    query: queries.listPosts,
    variables: {
      limit,
      nextToken,
    },
    authMode: "apiKey",
  });
  return { posts: items, next: returnedNextToken || null } as {
    posts: Posts;
    next: string | null;
  };
}

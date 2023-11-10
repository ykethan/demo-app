// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLQuery, generateClient } from "@aws-amplify/api";
import { ListPostsQuery } from "../../../data/API";
import * as queries from "../../../data/queries";

const client = generateClient();

// type Data = {
//   posts: {
//     author?: string | null;
//     content?: string | null;
//     createdAt: string;
//     id: string;
//     title: string;
//     updatedAt: string;
//     __typename: string;
//   }[];
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const postData = await client.graphql<GraphQLQuery<ListPostsQuery>>({
      query: queries.listPosts,
    });
    const posts = postData.data.listPosts?.items || [];
    console.log("post list", posts);
    res.status(200).json({ posts });
  } catch (err) {
    console.log("error fetching posts...", err);
    res.status(500).json({ posts: [] });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLQuery, generateClient } from "@aws-amplify/api";
import { CreatePostMutation } from "../../../data/API";
import * as queries from "../../../data/mutations";

const client = generateClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("req", req.body);

  try {
    const postData = await client.graphql({
      query: queries.createPost,
      variables: {
        input: {
          ...req.body,
        },
      },
    });
    const post = postData.data.createPost;
    // console.log("post list", post);
    res.status(200).json({ post });
  } catch (err) {
    console.log("error fetching posts...", err);
    res.status(500).json({ posts: [] });
  }
}

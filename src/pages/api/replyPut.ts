import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLQuery, generateClient } from "@aws-amplify/api";
import { CreateReplyMutation } from "../../../data/API";
import * as queries from "../../../data/mutations";

const client = generateClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("req", req.body);
  //commentRepliesId
  try {
    const postData = await client.graphql<GraphQLQuery<CreateReplyMutation>>({
      query: queries.createReply,
      variables: {
        input: {
          ...req.body,
        },
      },
    });
    const post = postData.data.createReply || "";
    console.log("reply", post);
    res.status(200).json({ reply: post });
  } catch (err) {
    console.log("error fetching posts...", err);
    res.status(500).json({ reply: [] });
  }
}

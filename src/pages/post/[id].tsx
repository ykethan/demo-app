import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Auth from "@aws-amplify/auth";
import { GraphQLQuery, generateClient } from "@aws-amplify/api";
import { GetPostQuery, Post, Comment } from "../../../data/API";
import { getPost } from "../../../graphql/queries";

const PostDetailsPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const router = useRouter();
  const { id } = router.query;
  const client = generateClient();

  const getIPost = `
query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    content
    author
    createdAt
    comments {
      items {
        id
        content
        author
        createdAt
      }
      nextToken
    }
  }
}
`;

  useEffect(() => {
    if (id) {
      fetchPostAndComments(id);
    }
  }, [id]);

  async function fetchPostAndComments(postId: any) {
    try {
      const postData = await client.graphql<GraphQLQuery<GetPostQuery>>({
        query: getIPost,
        variables: {
          id: postId,
        },
      });
      const fetchedPosts = postData.data.getPost as Post;
      if (fetchedPosts) {
        setPost(fetchedPosts);
        if (fetchedPosts.comments && fetchedPosts.comments.items) {
          const filteredComments = fetchedPosts.comments.items.filter(
            (comment) => comment !== null
          ) as Comment[];
          setComments(filteredComments);
        }
      }
    } catch (err) {
      console.error("Error fetching Post and comments", err);
    }
  }

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold text-gray-800">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
      {/* Display comments */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 my-2 shadow rounded">
            <p className="text-gray-800">{comment.content}</p>
            <span className="text-sm text-gray-500">By: {comment.author}</span>
          </div>
        ))}
      </div>
      {/* Add a form or component for submitting new comments */}
    </div>
  );
};

export default PostDetailsPage;

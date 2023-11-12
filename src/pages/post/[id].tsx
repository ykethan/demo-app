import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import * as Auth from "@aws-amplify/auth";
import { GraphQLQuery, generateClient } from "@aws-amplify/api";
import { GetPostQuery, Post } from "@/data/API";
import { CommentCreateForm, ReplyCreateForm } from "@/ui-components";
import "@aws-amplify/ui-react/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { PostCreateFormOverridesProps } from "@/ui-components/PostCreateForm";

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
        replies {
          items {
            id
            content
            author
            createdAt
          }
        }
      }
      nextToken
    }
  }
}
`;

  const getComment = `
query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    replies {
      items {
        id
        content
        author
        createdAt
      }
    }
  }
}
`;

  interface CommentCreateFormInputValues {
    author?: string;
    content?: string;
  }

  interface Reply {
    id: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    __typename: string;
  }

  interface Comment {
    id: string;
    content: string | null | undefined;
    author: string;
    createdAt: string;
    replies: Reply[];
    updatedAt: string;
    __typename: string;
  }

  const [user, setUser] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    if (id) {
      fetchPostAndComments(id);
    }

    const fetchUser = async () => {
      try {
        const userInfo = await Auth.fetchUserAttributes();
        setUser(userInfo.preferred_username as string); // Assuming username is the attribute you want
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  async function fetchPostAndComments(postId: any) {
    try {
      const postData = await client.graphql<GraphQLQuery<GetPostQuery>>({
        query: getIPost,
        variables: { id: postId },
      });
      const fetchedPost = postData.data.getPost as Post;
      if (fetchedPost) {
        setPost(fetchedPost);
        const fetchedComments = fetchedPost.comments?.items || [];

        const commentsWithRepliesPromises = fetchedComments.map(
          async (comment) => {
            if (comment) {
              try {
                const replyData = await client.graphql<GraphQLQuery<any>>({
                  query: getComment,
                  variables: { id: comment.id },
                });
                const replies =
                  replyData.data?.getComment?.replies?.items || [];
                return { ...comment, replies };
              } catch (error) {
                console.error(
                  "Error fetching replies for comment",
                  comment.id,
                  error
                );
                return comment; // Return the comment without replies in case of an error
              }
            } else {
              return null;
            }
          }
        );

        const commentsWithReplies = (
          await Promise.all(commentsWithRepliesPromises)
        ).filter(Boolean) as Comment[];
        setComments(commentsWithReplies);
      }
    } catch (err) {
      console.error("Error fetching Post and comments", err);
    }
  }

  if (!post) {
    return <div>Loading post...</div>;
  }

  const handleCommentSubmit = (
    formData: CommentCreateFormInputValues
  ): CommentCreateFormInputValues => {
    // Immediately start the asynchronous operation
    postComment(formData);

    // Immediately return formData, satisfying the expected return type
    return formData;
  };
  const postComment = async (formData: CommentCreateFormInputValues) => {
    const { content } = formData;
    const author = formData.author || user; // Fallback to `user` if `author` is not provided in the form data.
    const commentData = {
      author,
      content,
      postCommentsId: id as string,
    };

    try {
      const response = await fetch("/api/commentPut", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const { comment: newComment } = await response.json();
      setComments((currentComments) => [...currentComments, newComment]);
      setShowCommentForm(false);
    } catch (error) {
      console.error("Error submitting comment:", error);
      // You may want to set some error state here to display a message to the user
    }
  };

  const commentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const commentFormOverrides: PostCreateFormOverridesProps = {
    author: {
      value: user,
      isReadOnly: true,
    },
  };

  interface CollapsibleProps {
    title: string;
    children: ReactNode;
  }

  const Collapsible: React.FC<CollapsibleProps> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Define motion variants for the collapsible header
    const headerVariants = {
      hover: {
        backgroundColor: "#E2E8F0",
      },
    };

    return (
      <div className="collapsible">
        <motion.button
          whileHover="hover"
          variants={headerVariants}
          className="collapsible-header cursor-pointer bg-gray-200 p-2 mt-2 rounded text-gray-800 font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </motion.button>
        {isOpen && <div className="collapsible-content">{children}</div>}
      </div>
    );
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              href="/postsPage"
              className="text-gray-800 text-lg font-semibold"
            >
              Posts
            </Link>
            <Link href="/user" className="text-gray-800 text-lg font-semibold">
              Profile
            </Link>
          </div>
          <motion.button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </nav>
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-semibold text-gray-800">{post?.title}</h1>
        <p className="text-gray-600">{post?.content}</p>
        <AnimatePresence>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              className="bg-white p-4 my-2 shadow rounded"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={commentVariants}
              whileHover="hover"
            >
              <p className="text-gray-800">{comment.content}</p>
              <span className="text-sm text-gray-500">
                By: {comment.author}
              </span>
              <Collapsible title={`${comment.replies.length} Replies`}>
                {comment.replies.map((reply) => (
                  <motion.div
                    key={reply.id}
                    className="reply bg-gray-100 p-3 my-1 ml-4 shadow rounded"
                    whileHover={{ scale: 1.02 }} // subtle scale effect on hover
                    transition={{ type: "spring", stiffness: 300 }} // spring animation for smooth effect
                  >
                    <strong className="text-gray-900">{reply.author}:</strong>
                    <span className="text-gray-800"> {reply.content}</span>
                  </motion.div>
                ))}
              </Collapsible>
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.button
          onClick={() => setShowCommentForm(!showCommentForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {showCommentForm ? "Hide Comment Form" : "Add Comment"}
        </motion.button>
        <AnimatePresence>
          {showCommentForm && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={commentVariants}
            >
              <CommentCreateForm
                onSubmit={handleCommentSubmit}
                overrides={commentFormOverrides}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PostDetailsPage;

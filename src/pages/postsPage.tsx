import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Auth from "@aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { PostCreateForm } from "@/ui-components";

import "@aws-amplify/ui-react/styles.css";
import { PostCreateFormOverridesProps } from "@/ui-components/PostCreateForm";

interface Post {
  author?: string | null;
  content?: string | null;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  __typename: string;
}

interface PostCreateFormInputValues {
  author?: string;
  title?: string;
  content?: string;
}

export default function PostsPage() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Check the current user on initial load
    checkUser();

    // Listen for login/signup events
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signedIn") {
        checkUser();
      }
    });

    // Fetch posts
    fetchPosts();
  }, []);

  async function checkUser() {
    try {
      const userData = await Auth.fetchUserAttributes();
      setUser(userData.preferred_username as string);
    } catch (err) {
      console.error(err);
      setUser("");
    }
  }

  async function fetchPosts() {
    // Fetch posts from api folder
    try {
      const response = await fetch("/api/queries");
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setPosts([]);
    }
  }

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  const handleSubmit = (formData: PostCreateFormInputValues) => {
    createPost(formData);
    return formData;
  };
  const createPost = async (formData: PostCreateFormInputValues) => {
    try {
      const response = await fetch("/api/put", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, author: user }),
      });

      if (response.ok) {
        const { post } = await response.json();
        setPosts((currentPosts) => [post, ...currentPosts]);
        setShowCreateForm(false);
      } else {
        console.error("Failed to create the post");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  const formOverrides: PostCreateFormOverridesProps = {
    author: {
      value: user,
      isReadOnly: true,
    },
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <Link href="/user" className="text-gray-800 text-lg font-semibold">
              Profile
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <main>
          <div>
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.content}</p>
                <small className="text-gray-500">
                  By {post.author || "Unknown author"}
                </small>
              </article>
            ))}
          </div>
          {user && (
            <>
              <button
                onClick={toggleCreateForm}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                {showCreateForm ? "Close Create Post" : "Create New Post"}
              </button>
              {showCreateForm && (
                <div className="mt-4">
                  <PostCreateForm
                    onSubmit={handleSubmit}
                    overrides={formOverrides}
                  />
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import * as Auth from "@aws-amplify/auth";
import { useRouter } from "next/router";
import Link from "next/link";

interface UserAttributes {
  name?: string;
  email?: string;
}

const UserAttributesComponent = ({
  userAttributes,
}: {
  userAttributes: UserAttributes;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800 max-w-xl mx-auto">
      <h4 className="font-bold text-lg">
        Welcome,{" "}
        <span className="text-blue-500 animate-pulse text-xl">
          {userAttributes.name}
        </span>
        !
      </h4>
      <p className="text-md mt-2">Your email: {userAttributes.email}</p>
    </div>
  );
};

const UserPage = () => {
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      const user = await Auth.fetchUserAttributes();
      setUserAttributes({
        name: user.preferred_username,
        email: user.email,
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      router.push("/login");
    }
  }

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>; // Adjust loading text style if necessary
  }

  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <Link
              href="/postsPage"
              className="text-gray-800 text-lg font-semibold"
            >
              Posts
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

      <main className="py-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800">User Dashboard</h2>
          <p className="mt-3 text-lg text-gray-600">
            Heres a quick look at your profile:
          </p>
        </div>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <UserAttributesComponent userAttributes={userAttributes} />
        )}
      </main>
    </div>
  );
};

export default UserPage;

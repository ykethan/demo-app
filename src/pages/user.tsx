import Link from "next/link";
import Layout from "@/components/layout";
import * as auth from "aws-amplify/auth";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type UserPageProps = {
  username: string;
};

// if id === current user id, display more user information
export default function UserPage({ username }: UserPageProps) {
  return (
    <Layout>
      <section>
        <header>
          <h2>{username}</h2>
        </header>
        <div>
          <ul className={"text-gray-400"}>
            <li>
              <Link href={`/by?id=${username}`}>posts</Link>
            </li>
            <li>comments</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<UserPageProps>> {
  const id = context.query.id;

  if (!id || Array.isArray(id)) {
    return {
      notFound: true,
    };
  }

  const username = decodeURIComponent(id);

  // @TODO: how to look up whether user exists??
  // Auth.admin.getUser(id: string) ?

  const currentUser = await auth.getCurrentUser();
  return {
    props: {
      username,
    },
  };
}

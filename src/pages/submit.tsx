import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as auth from "aws-amplify/auth";
import { TextField, TextAreaField, Button } from "@aws-amplify/ui-react";
import Layout from "@/components/layout";
import { data } from "@/lib/data";
import PostCreateForm from "@/ui-components/PostCreateForm";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { FormEvent } from "react";

type SubmitPageProps = {
  /** Logged-in user's preferred username */
  username: string;
};

// if id === current user id, display more user information
export default function SubmitPage({ username }: SubmitPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const form = new FormData(event.currentTarget);
    const providedUrl = form.get("url") as string;
    const parsedUrl = new URL(providedUrl);

    const created = await data.models.Post.create({
      // @TODO replace this
      //   id: Date.now().toString(),
      author: username,
      link: providedUrl,
      linkHostname: parsedUrl.hostname,
      title: form.get("title") as string,
      body: (form.get("body") as string) || null,
    });
    setIsSubmitting(false);
    router.push(`/post/${created.data.id}`);
  }

  return (
    <Layout>
      <section>
        <header>{/* <h2 className="text-xl">Submit</h2> */}</header>
        <div>
          <form onSubmit={onSubmit}>
            <TextField label="Title" name="title" required />
            <TextField label="URL" name="url" required />
            <TextAreaField label="Body" name="body" />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
          {/* <PostCreateForm /> */}
          {/* <ul className={'text-gray-400'}>
            <li>
              <Link href={`/by?id=${username}`}>posts</Link>
            </li>
            <li>comments</li>
          </ul> */}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<SubmitPageProps>> {
  try {
    const currentUser = await auth.getCurrentUser();
    return {
      props: {
        username: currentUser.username,
      },
    };
  } catch (cause) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
}

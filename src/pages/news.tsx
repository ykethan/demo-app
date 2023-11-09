import Link from 'next/link'
import Layout from '@/components/layout'
import { listPosts } from '@/lib/tmp/list-posts'
import PostList from '@/components/post-list'
import { data } from '@/lib/data'
import type { Schema } from '../../amplify/data/resource'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

type HomePageProps = {
  posts: Schema['Post'][]
  /**
   * Next page token
   */
  next: string | null
}

export default function HomePage({ posts, next }: HomePageProps) {
  return (
    <Layout>
      <PostList posts={posts} />
      {next ? (
        <div className="pt-4 text-gray-500">
          <Link href={`/news?p=${next}`}>More</Link>
        </div>
      ) : null}
    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<HomePageProps>> {
  const { p } = context.query
  if (p && typeof p !== 'string') {
    throw new Error('Invalid page token')
  }
  const { posts, next } = await listPosts(p, 30)
  // @TODO: swap these once we can flip auth modes on `.list()`
  // const tbposts = await data.models.Post.list({
  //   filter: {},
  // })
  // console.log({ tbposts })
  return {
    props: { posts, next },
  }
}

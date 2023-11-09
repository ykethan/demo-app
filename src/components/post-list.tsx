import Link from 'next/link'
import cn from 'clsx'
import type { PropsWithChildren } from 'react'
import type { Schema } from '../../amplify/data/resource'

export type PostListProps = PropsWithChildren<{
  /**
   * List of posts
   */
  posts: Schema['Post'][]
}>

export default function PostList(props: PostListProps) {
  return (
    <ul className={cn('flex flex-col gap-2')}>
      {props.posts.map((post) => {
        const url = new URL(post.link)
        const points = 0
        return (
          <li data-postid={post.id} key={post.id}>
            <a href={post.link}>{post.title}</a>{' '}
            <span className={cn('text-gray-400', 'text-sm')}>
              <a
                className="hover:underline"
                href={`/from?site=${encodeURIComponent(url.hostname)}`}
              >
                ({url.hostname})
              </a>
            </span>
            <div className={cn('text-sm', 'text-gray-500')}>
              <span>
                {points} {points === 1 ? 'point' : 'points'} by{' '}
                <a
                  className="hover:underline"
                  href={`/by?author=${encodeURIComponent(post.author)}`}
                >
                  {post.author}
                </a>
              </span>{' '}
              {post.comments?.length > 0 ? (
                <>
                  | <Link href={`/post/${post.id}`}>comments</Link>
                </>
              ) : null}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthenticator, Button, TextAreaField } from '@aws-amplify/ui-react'
import { data } from '@/lib/data'
import type { FormEvent } from 'react'
import type { Schema } from '../../amplify/data/resource'

export type CommentBoxProps = {
  /**
   * Parent Post ID
   */
  parentPostId: Schema['Post']['id']
  /**
   * Parent Comment ID (if any)
   */
  parentCommentId?: string
}

export default function CommentBox({
  parentPostId,
  parentCommentId,
}: CommentBoxProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { user } = useAuthenticator((context) => [context.user])
  const router = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    if (!user) {
      // if not logged in, redirect to login
      router.push('/login')
    }

    const form = new FormData(event.currentTarget)
    // submit comment creation
    try {
      const result = await data.models.Comment.create({
        // ???
        // post: {
        //   id: parentPostId,
        // },
        content: form.get('comment') as string,
      })
    } catch (cause) {
      console.error('error submitting form', cause)
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <TextAreaField label="Comment" name="comment" minLength={1} />
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}

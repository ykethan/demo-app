import Link from 'next/link'
import cn from 'clsx'
import { useAuthenticator } from '@aws-amplify/ui-react'

export default function MainNav() {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  return (
    <nav
      className={cn(
        'flex justify-between',
        'py-1 px-2',
        'bg-orange-400 text-black'
      )}
    >
      <div>
        <Link href="/">
          <h1>orange site</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            {user ? (
              <div>
                <Link
                  href={`/user?id=${encodeURIComponent(
                    user.attributes!.preferred_username
                  )}`}
                >
                  {user.attributes!.preferred_username}
                </Link>
                &nbsp;| <button onClick={signOut}>logout</button>
              </div>
            ) : (
              <Link href="/login">login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

import { Inter } from 'next/font/google'
import Head from 'next/head'
import cn from 'clsx'
import MainNav from './main-nav'
import Content from './content'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export type LayoutProps = PropsWithChildren<{
  /**
   * Page title
   */
  title?: string
}>

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Orange Site'}</title>
      </Head>
      <div
        className={cn(
          'flex flex-col min-h-screen',
          'max-w-6xl mx-auto',
          'py-4',
          'text-base',
          inter.className
        )}
      >
        <MainNav />
        <Content>{children}</Content>
      </div>
    </>
  )
}

import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'

import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="navbar">
        <Link href="/" className="logo">Appleforum</Link>
        <Link href="/list">List</Link>
        {
          session
            ? <span>계정 : {session.user.name} <LogoutBtn/> </span>
            : <span><LoginBtn></LoginBtn> <Link href="/register">회원가입</Link></span>
        }
        <Link href="/write">글쓰기</Link>
      </div>
        {children}
        </body>
    </html>
  )
}

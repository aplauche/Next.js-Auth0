import { useUser } from '@auth0/nextjs-auth0/client';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const { user, error, isLoading } = useUser();

  return (
    <div className='max-w-screen-sm mx-auto h-full flex flex-col justify-center'>
      <div className='bg-white rounded-md px-5 py-16 w-full mb-[75px] text-center'>
        <h1 className='text-3xl font-bold'>Welcome</h1>
        {user ? (
          <>
            <p>Welcome, {user.name}</p>
            <Link href="/dashboard" className='btn mt-4'>
              Go To Dashboard
            </Link>
          </>
        ): (
          <>
            <p>Sign in to access your account</p>
            <Link href="/api/auth/login" className='btn mt-4'>
              Sign In Now
            </Link>
          </>
        )}

      </div>
    </div>
  )
}

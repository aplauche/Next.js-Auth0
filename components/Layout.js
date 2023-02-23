import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Layout({ children }) {

  const { user, error, isLoading } = useUser();

  return (
    <>
      <header className="fixed w-full h-[75px] px-4 flex justify-between items-center bg-slate-500 text-white">
        <Link href="/">
          Logo Here
        </Link>
        <div className="flex items-center gap-3">
          {user ? (
            <>
            Welcome, {user.name}
            <Link className="btn" href="/api/auth/logout">
              Sign Out
            </Link>
            </>
          ) : (
            <>
            New here? 
            <Link className="btn" href="/api/auth/login">
              Sign In
            </Link>
            </>
          )}
        </div>
      </header>
      <main className="bg-slate-200 h-screen pt-[75px]">
        {children}
      </main>
    </>
  )
}
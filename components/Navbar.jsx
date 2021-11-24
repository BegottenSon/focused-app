import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav className="flex gap-2 p-2 w-full items-center justify-end">
      <Link href="/">
        <a>Home</a>
      </Link>
      {user && (
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      )}
      {user ? (
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        <a href="/api/auth/logout">Logout</a>
      ) : (
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        <a href="/api/auth/login">Login</a>
      )}
    </nav>
  );
}

import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const { user } = useUser();

  return (
    <nav className="flex gap-2 p-2 w-full items-center justify-end relative">
      <Link href="/">
        <a>Home</a>
      </Link>
          <button
            onClick={() => setActive(!active)}
            className="bg-cool-blue h-8 w-8 rounded-full hover:bg-primary group"
          >
            <svg
              width="100%"
              height="80%"
              viewBox="0 0 72 72"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className='fill-current text-primary group-hover:text-cool-blue'
            >
              <g transform="matrix(1,0,0,1,0.863874,-6.28096)">
                <circle cx="35.136" cy="22.555" r="13.445" />
              </g>
              <g transform="matrix(1.09726,0,0,1,1.23866,-10.1601)">
                <path d="M51.312,48.738C51.312,43.11 47.147,38.541 42.018,38.541L21.342,38.541C16.213,38.541 12.049,43.11 12.049,48.738L12.049,69.133C12.049,74.762 16.213,79.331 21.342,79.331L42.018,79.331C47.147,79.331 51.312,74.762 51.312,69.133L51.312,48.738Z" />
              </g>
            </svg>
          </button>
      {user && (
        <div>
          <div
            style={{opacity: active ? 1 : 0, transform: active &&'translateY(10px)', zIndex: !active && -10, backgroundColor: !active && '#DCE03D'}}
            className="absolute flex flex-col right-5 bg-dark-mustard rounded p-4 w-32 min-h-full transition-all duration-300"
          >
            <Link href="/profile">
              <a onClick={() => setActive(!active)}>Profile</a>
            </Link>
            {user ? (
              // eslint-disable-next-line @next/next/no-html-link-for-pages
              <a href="/api/auth/logout" onClick={() => setActive(!active)}>
                Logout
              </a>
            ) : (
              // eslint-disable-next-line @next/next/no-html-link-for-pages
              <a href="/api/auth/login" onClick={() => setActive(!active)}>
                Login
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

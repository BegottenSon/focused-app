import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="flex border-t border-primary justify-center">
        <a
          href="https://www.begottensounds.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          Powered by
          <span>
            <Image
              src="/bsn-full.svg"
              alt="Begotten Sounds Logo"
              width={144}
              height={96}
            />
          </span>
        </a>
      </footer>
    )
}
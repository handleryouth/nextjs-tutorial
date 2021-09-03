import Link from "next/Link"
//as from next, image using this tag
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
      {/* this thing is automatically lazy loading */}
        <Image src="/logo.png" width={128} height={77} alt="logo"/>
      </div>
      <Link href="/" >Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
}

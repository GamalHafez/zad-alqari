import SocialLinks from "@components/social-links";
import Link from "next/link";
import logo from "@assets/book.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex sticky top-0 pt-5 pb-3 px-4 lg:px-12 bg-white items-center justify-between border-b-2 border-b-gray-200 mb-5 z-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} alt="Page logo" className="max-w-full w-5" />
        <h1 className="font-semibold text-2xl">زاد القارئ</h1>
      </Link>

      <SocialLinks />
    </header>
  );
}

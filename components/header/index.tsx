import SocialLinks from "@components/social-links";
import Link from "next/link";
import logo from "@assets/book.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mb-5 flex items-center justify-between border-b-2 border-b-gray-200 bg-white px-4 pt-5 pb-3 lg:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src={logo} alt="Page logo" className="w-5 max-w-full" />
        <h1 className="text-2xl font-semibold">زاد القارئ</h1>
      </Link>

      <SocialLinks />
    </header>
  );
}

import SocialLinks from "@components/social-links";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mb-5 flex items-center justify-between border-b-2 border-b-gray-200 bg-white px-4 pt-5 pb-3 lg:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
        width={20}
        height={20}
          src="/images/book.png"
          alt="Page logo"
        />
        <h1 className="text-2xl font-semibold">زاد القارئ</h1>
      </Link>

      <SocialLinks />
    </header>
  );
}

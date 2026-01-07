import { books } from "@/data/books";
import Link from "next/link";

const getBookSlug = (
  currentSlug: string,
  direction: "next" | "prev",
): string => {
  const currentIndex = books.findIndex((b) => b.slug === currentSlug);
  if (currentIndex === -1) return currentSlug;

  let newIndex: number;
  if (direction === "next") {
    newIndex = (currentIndex + 1) % books.length;
  } else {
    newIndex = (currentIndex - 1 + books.length) % books.length;
  }
  return books[newIndex].slug;
};

const BookNavigation = ({ slug }: { slug: string }) => {
  return (
    <section className="mt-8 flex w-full justify-between">
      <Link
        href={`/books/${getBookSlug(slug, "next")}`}
        title="الانتقال إلى كتاب آخر"
        className="rounded-lg bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-950 hover:shadow-md active:scale-[0.98]"
      >
        الكتاب التالي
      </Link>
      <Link
        href={`/books/${getBookSlug(slug, "prev")}`}
        title="الانتقال إلى كتاب سابق"
        className="rounded-lg bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-blue-950 hover:shadow-md active:scale-[0.98]"
      >
        الكتاب السابق
      </Link>
    </section>
  );
};

export default BookNavigation;

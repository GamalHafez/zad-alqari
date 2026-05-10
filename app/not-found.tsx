import EmptyState from "@/components/empty-state";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <EmptyState
        title="الصفحة غير موجودة"
        description="الصفحة التي تحاول الوصول إليها غير متاحة أو تم نقلها."
      />
      <Link
        href="/"
        className="mt-14 rounded-md bg-red-950 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-950/85"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </>
  );
};

export default NotFound;

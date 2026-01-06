const BookPurposes = ({ purposes }: { purposes: string[] }) => {
  return (
    <>
      <h2 className="mt-10 mb-1 text-lg font-semibold">
        لماذا تقرأ هذا الكتاب؟
      </h2>
      <ul>
        {purposes.map((purpose, i) => (
          <li
            key={i}
            className="flex place-items-baseline gap-2 rounded-md px-4 py-2 text-sm text-gray-800 md:gap-3 lg:gap-3 lg:bg-gray-50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-900"></span>
            <span>{purpose}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookPurposes;

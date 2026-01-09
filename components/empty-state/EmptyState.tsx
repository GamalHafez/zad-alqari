type EmptyStateProps = {
  title?: string;
  description?: string;
};

const EmptyState = ({
  title = "لا يوجد محتوى",
  description = "لم نتمكن من العثور على ما تبحث عنه.",
}: EmptyStateProps) => {
  return (
    <article className="mx-auto mt-16 flex max-w-md flex-col items-center text-center text-gray-700">
      <div className="mb-5 text-8xl font-bold text-red-900">!404</div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </article>
  );
};

export default EmptyState;

const NewsCardSkeleton = () => {
  return (
    <div className="animate-pulse bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-md">

      <div className="h-52 bg-gray-300 dark:bg-zinc-700"></div>

      <div className="p-5">

        <div className="w-20 h-5 rounded-full bg-gray-300 dark:bg-zinc-700 mb-4"></div>

        <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded mb-3"></div>

        <div className="h-6 w-3/4 bg-gray-300 dark:bg-zinc-700 rounded mb-5"></div>

        <div className="space-y-2 mb-6">

          <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded"></div>

          <div className="h-4 w-5/6 bg-gray-300 dark:bg-zinc-700 rounded"></div>

        </div>

        <div className="flex justify-between">

          <div className="h-4 w-20 bg-gray-300 dark:bg-zinc-700 rounded"></div>

          <div className="h-4 w-16 bg-gray-300 dark:bg-zinc-700 rounded"></div>

        </div>

      </div>

    </div>
  );
};

export default NewsCardSkeleton;
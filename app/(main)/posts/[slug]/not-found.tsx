export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center text-center p-4 flex-col">
      <h1 className="text-3xl font-bold mb-2">Post Not Found</h1>
      <p className="text-lg text-gray-600">
        The post you are looking for does not exist or has been removed.
      </p>
    </div>
  );
}

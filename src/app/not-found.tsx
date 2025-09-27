import "./globals.css"


export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 text-gray-100">
      {/* 404 Text */}
      <h1 className="text-8xl font-extrabold text-gray-700">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Oops! The page you’re looking for does not exist or has been moved.
      </p>
    </div>
  );
}

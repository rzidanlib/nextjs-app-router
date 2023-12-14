import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h2 className="text-9xl font-bold">404</h2>
      <p className="text-xl mb-5">Page Not Found</p>
      <Link href="/" className="hover:text-blue-700 underline">
        &larr; Return Home
      </Link>
    </div>
  );
}

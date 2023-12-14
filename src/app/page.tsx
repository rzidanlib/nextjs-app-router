import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Next App",
  description: "My Next App",
  authors: [{ name: "Next App", url: "http://localhost:3000" }],
};

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center mt-5">Hello World</h1>
    </div>
  );
}

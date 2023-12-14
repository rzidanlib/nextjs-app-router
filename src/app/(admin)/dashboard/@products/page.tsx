"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=${process.env.REVALIDATE_TOKEN}`,
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate success");
      }
    }
  };

  return (
    <div className="w-3/6 h-96 bg-gray-400 rounded-[12px] flex justify-center items-center">
      <h1>{status}</h1>
      <button
        className="p-2 rounded-md m-5 bg-blue-400 text-white"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}

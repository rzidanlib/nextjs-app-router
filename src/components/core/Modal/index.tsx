"use client";
import { useRouter } from "next/navigation";
import { useRef, ReactNode, MouseEventHandler } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 flex justify-center items-center"
      onClick={close}
    >
      <div className="absolute p-6 bg-white rounded-lg">{children}</div>
    </div>
  );
}

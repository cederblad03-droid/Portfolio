"use client";

import { useRouter } from "next/navigation";

export default function GoToProjectButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/project")} className="mt-2 px-3 py-1 bg-black text-white rounded">
      Projects
    </button>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function GoToProjectButton() {
  const router = useRouter();
  const handleClick = () => {
    // add exit class so the page can animate out
    document.body.classList.add("page-exit");
    // wait for the animation to play, then navigate
    setTimeout(() => router.push("/project"), 300);
  };

  return (
    <button onClick={handleClick} className="mt-2 px-3 py-1 bg-black text-white rounded">
      Projects
    </button>
  );
}

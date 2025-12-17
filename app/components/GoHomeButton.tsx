"use client";

import { useRouter, usePathname } from "next/navigation";

export default function GoHomeButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    // Immediately navigate to home or refresh if already there
    if (pathname === "/") {
      router.refresh();
    } else {
      router.push("/");
    }
  };

  return (
    <button onClick={handleClick} className="mt-2 px-3 py-1 bg-black text-white rounded">
      Home
    </button>
  );
}

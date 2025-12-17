"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TransitionHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure any previous exit class is removed so the new page can enter
    document.body.classList.remove("page-exit");

    // Add `page-enter` to set initial (hidden) state, then remove it so
    // the #page-root transitions into view.
    document.body.classList.add("page-enter");
    const t = setTimeout(() => {
      document.body.classList.remove("page-enter");
    }, 350);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}

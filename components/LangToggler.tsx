"use client";

import { usePathname, useRouter } from "../utils/navigation.ts";

export function LangToggler() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-row gap-3 cursor-pointer">
      <div onClick={() => router.push(pathname, { locale: "en" })}>English</div>
      <div onClick={() => router.push(pathname, { locale: "ar" })}>العربية</div>
    </div>
  );
}

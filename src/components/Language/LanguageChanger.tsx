"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/fa";

  const toggle = () => {
    console.log("toggle");
    const current = pathname.startsWith("/en") ? "en" : "fa";
    const next = current === "en" ? "fa" : "en";

    const newPath = pathname.replace(/^\/(fa|en)/, `/${next}`);
    router.push(newPath);
  };

  const current = pathname.startsWith("/en") ? "EN" : "FA";
  const next = current === "EN" ? "FA" : "EN";

  return (
    <Button
      onClick={toggle}
      variant="secondary"
      aria-label="Switch language"
      className="w-[50px] h-[50px] rounded-[5px] flex justify-center items-center text-white"
    >
      {next}
    </Button>
  );
}

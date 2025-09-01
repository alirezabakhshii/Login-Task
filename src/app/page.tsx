"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getItem } from "@/lib/storageHelper";
import type { TUser } from "@/types/user";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getItem<TUser>("user");

    const defaultLocale = "fa";

    if (user) {
      router.push(`/${defaultLocale}/dashboard`);
    } else {
      router.push(`/${defaultLocale}/login`);
    }
  }, [router]);

  return null;
}

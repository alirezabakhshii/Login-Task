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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center relative z-10 px-4">
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-slate-600 border-t-transparent mx-auto mb-4 sm:mb-6"></div>
        <p className="text-slate-300 text-lg sm:text-xl px-4">Redirecting...</p>
      </div>
    </div>
  );
}

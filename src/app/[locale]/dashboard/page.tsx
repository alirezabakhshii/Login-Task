"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { getItem, removeItem } from "@/lib/storageHelper";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/Language/LanguageChanger";
import { LogOut, Mail, Smartphone } from "lucide-react";
import type { TUser } from "@/types/user";
import { use } from "react";
import Image from "next/image";

export type Props = {
  params: Promise<{ locale: string }>;
};

export default function Dashboard(props: Props) {
  const params = use(props.params);
  const { locale } = params;
  const t = useTranslations();
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Ensure locale is always defined
  const currentLocale = locale || "fa";

  useEffect(() => {
    const stored = getItem<TUser>("user");
    if (!stored) {
      // No user data, redirect to login
      router.push(`/${currentLocale}/login`);
    } else {
      // User exists, set user data
      setUser(stored);
      setLoading(false);
    }
  }, [currentLocale, router]);

  const handleLogout = () => {
    removeItem("user"); // Fixed: was "auth_user", should be "user"
    router.push(`/${currentLocale}/login`);
  };

  // Show loading while checking user data
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
        </div>
        <div className="text-center relative z-10 px-4">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-slate-600 border-t-transparent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-slate-300 text-lg sm:text-xl px-4">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
      </div>

      {/* Responsive Header */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-3 sm:p-6 z-10">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <Smartphone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-2xl font-bold text-slate-100">
            {t("appTitle")}
          </span>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <LocaleSwitcher />
        </div>
      </div>

      {/* Main Content - Responsive */}
      <div className="min-h-screen flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 relative z-10">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <Card className="bg-slate-800/50 border border-slate-700 shadow-2xl">
            <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
              <div className="relative mx-auto mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 sm:ring-4 ring-slate-600 bg-gradient-to-br from-slate-700 to-slate-600 p-1 shadow-xl relative">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-slate-800 flex items-center justify-center shadow-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-2 sm:mb-3 px-2">
                {t("dashboardWelcome", { name: user.name })}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-xl flex items-center justify-center space-x-2 sm:space-x-3 text-slate-300 px-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                <span className="break-all">{t("dashboardEmail", { email: user.email })}</span>
              </CardDescription>
            </CardHeader>

            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <LogOut className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                {t("navLogout")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { isValidPhoneNumber } from "@/lib/phoneNumberValidator";
import { setItem, getItem } from "@/lib/storageHelper";
import { LocaleSwitcher } from "@/components/Language/LanguageChanger";
import { Loader2, Smartphone, Shield } from "lucide-react";
import { TUser } from "@/types/user";
import { use } from "react";

export type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default function LoginPage(props: Props) {
  const params = use(props.params);
  const { locale } = params;
  const t = useTranslations();
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const currentLocale = locale || "fa";

  useEffect(() => {
    const user = getItem<TUser>("user");
    if (user) {
      router.push(`/${currentLocale}/dashboard`);
    }
  }, [currentLocale, router]);

  const handleLogin = async () => {
    if (!isValidPhoneNumber(phone)) {
      setError(t("loginErrorInvalid"));
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const u = data.results[0];
      setItem<TUser>("user", {
        name: `${u.name.first} ${u.name.last}`,
        email: u.email,
        avatar: u.picture.thumbnail,
      });
      router.push(`/${currentLocale}/dashboard`);
    } catch {
      setError(t("loginErrorNetwork"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="fixed top-0 z-50 left-0 w-full flex items-center justify-between p-3 sm:p-6 z-10">
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

      <div className="min-h-screen flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 relative z-10">
        <div className="w-full max-w-sm sm:max-w-md">
          <Card className="bg-slate-800/50 border border-slate-700 shadow-2xl">
            <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-xl">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-2 px-2">
                {t("navLogin")}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-slate-300 px-2">
                {t("loginPhoneLabel")}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="phone"
                  className="text-base sm:text-lg font-semibold text-slate-200 flex items-center space-x-2"
                >
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                  <span>{t("loginPhoneLabel")}</span>
                </Label>
                <Input
                  id="phone"
                  inputMode="numeric"
                  placeholder={t("loginPlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby="phone-error"
                  className="h-12 sm:h-14 text-base sm:text-lg border-2 border-slate-600 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 transition-all duration-300 bg-slate-700 text-slate-100 placeholder:text-slate-400 rounded-lg"
                />
                {error ? (
                  <p
                    id="phone-error"
                    className="text-xs sm:text-sm text-red-400 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full flex-shrink-0"></span>
                    <span>{error}</span>
                  </p>
                ) : null}
              </div>

              <Button
                onClick={handleLogin}
                disabled={loading}
                aria-busy={loading}
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
                    {t("loginLoading")}
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                    {t("loginButton")}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

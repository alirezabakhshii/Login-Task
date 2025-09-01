import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18next";

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
  // Ensure root path redirects to default locale
  localePrefix: "always"
});

export const config = {
  matcher: ["/", "/(fa|en)/:path*"],
};

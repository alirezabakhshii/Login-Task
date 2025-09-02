import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocales = ["fa", "en"];
  const defaultLocale = "fa";
  
  // Ensure locale is always defined
  if (!locale || !validLocales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});

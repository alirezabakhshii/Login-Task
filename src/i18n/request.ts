import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "en"; // You can dynamically determine the locale here
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});

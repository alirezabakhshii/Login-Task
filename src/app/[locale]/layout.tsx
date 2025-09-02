import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getDirection } from "@/i18next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Auth Task",
  description: "Client Side Authentication",
};

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

async function getMessages(locale: string) {
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Return null instead of calling notFound() to avoid server errors
    return null;
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = getDirection(locale as "fa" | "en");
  const messages = await getMessages(locale);

  if (!messages) {
    notFound();
  }

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

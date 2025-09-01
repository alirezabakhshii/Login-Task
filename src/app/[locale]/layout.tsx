import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getDirection, type Locale } from "@/i18next";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth Task",
  description: "Client Side Authentication",
};

export function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }];
}

async function getMessages(locale: Locale) {
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const direction = getDirection(locale);
  const messages = await getMessages(locale);

  if (!messages) {
    notFound();
  }

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getDirection, type Locale } from "@/i18next";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import "./globals.css"; // از /src/app/globals.css به این فایل ایمپورت میشه

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
    // notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const direction = getDirection(params.locale);
  const messages = await getMessages(params.locale);

  console.log(messages, "messages are heare");

  return (
    <html lang={params.locale} dir={direction} suppressHydrationWarning>
      <body className="min-h-screen">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

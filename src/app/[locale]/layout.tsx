import "./globals.css";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return ["en", "de"].map((locale) => ({ locale }));
}


export const metadata = {
  title: 'preview-invoice',
  description: 'Invoice preview app', 
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
      <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

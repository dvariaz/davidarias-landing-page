import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { goboldHollowFont, goboldItalicFont, poppinsFont } from '@/config/fonts';

import "@/config/styles/libraries.css";
import "@/config/styles/global.scss";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} className={clsx(goboldItalicFont.variable, goboldHollowFont.variable, poppinsFont.variable)}>
        <body>
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
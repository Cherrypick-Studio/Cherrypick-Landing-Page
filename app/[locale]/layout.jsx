import { Rubik } from "next/font/google";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import Script from "next/script";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Cherrypick Studio",
  description:
    "Cherry Pick is your trusted partner for cutting-edge web and mobile application services. We are committed to helping businesses of all sizes harness the power of technology to drive growth, innovation, and customer engagement.",
  manifest: './manifest.json',
  themeColor: "#C42026",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
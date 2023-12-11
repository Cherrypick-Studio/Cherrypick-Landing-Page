import { Rubik } from "next/font/google";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import Script from "next/script";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Cherrypick Studio",
  description: "Digitalize Your Products with Us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={rubik.className}>
        {/* START: Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5N9MC1DSC3" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5N9MC1DSC3');
        `}
        </Script>

        {/* END: Google Analytics */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

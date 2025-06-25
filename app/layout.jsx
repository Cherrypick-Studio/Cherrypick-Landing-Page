import { Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Cherrypick Studio",
  description:
    "Cherry Pick is your trusted partner for cutting-edge web and mobile application services.",
  manifest: './manifest.json',
  themeColor: "#C42026",
};

export default function RootLayout({ children }) {
  return (
    <html style={{ scrollBehavior: "smooth" }}>
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
        {children}
      </body>
    </html>
  );
}

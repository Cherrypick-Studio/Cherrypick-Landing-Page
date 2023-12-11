import { Rubik } from "next/font/google";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

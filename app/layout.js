import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Issue Tracker",
  description: "Sample Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { CardProvider } from "./component/CardContext";
import Barra from "./component/Barra";
import Navbar from "./component/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Libreria",
  description: "Generated by Romero, Vaserman, Egaña",
};

export default function RootLayout({ children }) {
  return (
    <CardProvider>
      <html lang="en">
        <body className={inter.className}>
          <Barra />
          {/* <Navbar />   */}

          {children}
        </body>
      </html>
    </CardProvider>
  );
}

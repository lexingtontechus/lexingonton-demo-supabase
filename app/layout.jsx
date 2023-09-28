import "./globals.css";
import "./custom.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

//import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo / Lexington",
  description: "Lexington Tech Demo, Supabase",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}

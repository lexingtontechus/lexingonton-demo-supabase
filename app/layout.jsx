import "./globals.css";
import "./custom.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { dark,neobrutalism,shadesOfPurple } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

//import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo / Lexington",
  description: "Lexington Tech FX Demo",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        variables: {
          colorPrimary: "gray",
          colorText: "red",
        },
      }}
    >
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
    </ClerkProvider>
  );
}

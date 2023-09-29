//import Sidebar from "./components/sidebar";
import Navbar from "./navbar";
//import Footer from "./components/footer";

export const metadata = {
  title: "Dashboard / Lexington",
  description: "Lexington Tech FX Demo",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Star Backend",
    template: "%s | Star Backend",
  },
  description: "A backend university",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="mt-20 min-h-screen w-full p-5 md:mt-10 md:p-10">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

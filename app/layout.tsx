import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

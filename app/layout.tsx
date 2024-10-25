import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Moonlamp",
  description: "E-commerce Website about Moonlamps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.classname}
      >
        {children}
      </body>
    </html>
  );
}

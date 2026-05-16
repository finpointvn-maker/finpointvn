import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora, Francois_One } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export const francois = Francois_One({
  subsets: ["latin"],
  variable: "--font-francois",
  weight: "400"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        inter.variable,
        lora.variable,
        francois.variable
      )}>
      <head>
        <meta
          name="google-site-verification"
          content="m-mJTLa7dTIhb1K9gYCQAJyHCtYoo7Kw4gpbA47qIDk"
        />
      </head>
      <body className="flex-col flex justify-between text-gray-800 antialiased dark:bg-black dark:text-gray-400 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

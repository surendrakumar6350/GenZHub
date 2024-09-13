import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import { Providers } from "./redux/Providers";
import { cn } from "@/lib/utils";
import Script from "next/script";
import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Student Records & Contact Info | GenZhub",
  description:
    "Access student records, mobile numbers, and emails with GenZhub. Explore our free database for educational institutions, researchers, and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <meta name="msvalidate.01" content="5BFEDB060FBC12E19362640F31C2018D" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content="https://surendra-dev.in.net" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Student Records & Contact Info | GenZHub"
        />
        <meta
          property="og:description"
          content="Access student records, mobile numbers, and emails with GenZhub. Explore our free database for educational institutions, researchers, and businesses."
        />

        <meta
          property="og:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/surendra-dev.in.net/GenZHub/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fb10e4250-dfeb-45e5-a1b2-8f21c90fa1dd.jpg%3Ftoken%3DQdHhHZZ7a4O9d9f8kJzug3QBeu7SHUdTHp_TBTtDXCY%26height%3D200%26width%3D202%26expires%3D33262214946/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="surendra-dev.in.net" />
        <meta property="twitter:url" content="https://surendra-dev.in.net" />
        <meta
          name="twitter:title"
          content="Student Records & Contact Info | GenZHub"
        />
        <meta
          name="twitter:description"
          content="Access student records, mobile numbers, and emails with GenZhub. Explore our free database for educational institutions, researchers, and businesses."
        />

        <meta
          name="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/surendra-dev.in.net/GenZHub/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2Fb10e4250-dfeb-45e5-a1b2-8f21c90fa1dd.jpg%3Ftoken%3DQdHhHZZ7a4O9d9f8kJzug3QBeu7SHUdTHp_TBTtDXCY%26height%3D200%26width%3D202%26expires%3D33262214946/og.png"
        />

        <GoogleOAuthProvider clientId={`${process.env.CLIENT_ID}`}>
          <body
            className={cn(
              "antialiased",
              fontHeading.variable,
              fontBody.variable
            )}
          >
            {children}
          </body>
        </GoogleOAuthProvider>
        <Script
          src="https://eechicha.com/act/files/tag.min.js?z=8030540"
          data-cfasync="false"
          type="text/javascript"
        />
        <Script src="/ss.js" data-cfasync="false" type="text/javascript" />
      </html>
    </Providers>
  );
}

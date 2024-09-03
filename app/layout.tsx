import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./globals.css";
import { Providers } from './redux/Providers'
import { cn } from '@/lib/utils'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <GoogleOAuthProvider clientId={`${process.env.CLIENT_ID}`}>
      <title>GenZHub</title>
      <body  className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}>{children}</body>
      </GoogleOAuthProvider>
      <Script src="https://eechicha.com/act/files/tag.min.js?z=8030540" data-cfasync="false" type="text/javascript" />
      <Script src="/ss.js" data-cfasync="false" type="text/javascript" />
    </html>
    </Providers>
  );
}

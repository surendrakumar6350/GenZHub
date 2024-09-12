import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./globals.css";
import { Providers } from './redux/Providers'
import { cn } from '@/lib/utils'
import Script from "next/script";
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'GenZHub',
  description: 'Our website aims to provide a comprehensive resource for students to connect',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <GoogleOAuthProvider clientId={`${process.env.CLIENT_ID}`}>
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

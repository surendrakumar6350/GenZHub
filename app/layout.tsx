"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./globals.css";
import { cn } from '@/lib/utils'

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
    <html lang="en">
      <GoogleOAuthProvider clientId="521164846169-acl32c6s15bu9hecu3mfaannc0cboeq6.apps.googleusercontent.com">
      <body  className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}>{children}</body>
      </GoogleOAuthProvider>
    </html>
  );
}

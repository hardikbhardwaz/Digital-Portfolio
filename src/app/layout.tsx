import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';
import { ThemeProvider } from '@/components/theme-provider';
import SmoothScrolling from '@/components/SmoothScrolling';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Digital Marketing, Creative & Web Expert from India Driving Global Growth',
  description: 'Digital marketing, creative design, video production, and high-converting web solutions from India for global brands. I help businesses scale with performance marketing, automation, and modern digital experiences.',
  keywords: ['Digital marketing expert India', 'performance marketing', 'lead generation', 'Meta Ads', 'funnel and automation', 'creative design', 'web development', 'conversion optimization'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(
        inter.variable,
        spaceGrotesk.variable,
        'antialiased bg-background text-foreground min-h-screen selection:bg-luxury-blue selection:text-white font-sans overflow-x-hidden'
      )}>
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <Cursor />
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}

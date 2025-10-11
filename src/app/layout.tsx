import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AudioProvider } from '@/context/audio-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AudioPlayer } from '@/components/audio-player';

const inter = Inter({ subsets: ['latin'], variable: '--font-family-base' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.radiovolare.com'),
  title: {
    default: 'Radio Volare – La voce italiana in Svizzera',
    template: '%s | Radio Volare'
  },
  description:
    'Radio Volare: Livestream, Sendungen, Podcasts und Geschichten aus der italienischsprachigen Community in der Schweiz.',
  openGraph: {
    type: 'website',
    title: 'Radio Volare',
    description:
      'Livestream, Sendungen, Podcasts und Geschichten aus der italienischsprachigen Community in der Schweiz.',
    locale: 'de_CH',
    url: 'https://www.radiovolare.com',
    siteName: 'Radio Volare'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radio Volare',
    description:
      'Livestream, Sendungen, Podcasts und Geschichten aus der italienischsprachigen Community in der Schweiz.'
  },
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="bg-surface">
      <body className={`${inter.variable} flex min-h-screen flex-col bg-surface text-text antialiased`}>
        <AudioProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AudioPlayer />
        </AudioProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import SearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

const siteUrl = 'https://baseryn.github.io/zcore-docs';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FastAPI ZCore Framework — Modern Modular Monolith for Python',
    template: '%s | ZCore Framework by Baseryn',
  },
  description:
    'Official documentation for FastAPI ZCore Framework. High-performance modular architectural framework built on top of FastAPI, SQLAlchemy 2.0, and Pydantic V2. Created by Ali Alf Ostovar / Baseryn.',
  keywords: [
    'FastAPI',
    'ZCore',
    'FastAPI ZCore',
    'FastAPI Framework',
    'Modular Monolith Python',
    'Clean Architecture Python',
    'Domain-Driven Design Python',
    'SQLAlchemy 2.0 Async',
    'Pydantic V2',
    'Dependency Injection Python',
    'IoC Container',
    'Unit of Work FastAPI',
    'Zchema',
    'Soft Delete SQLAlchemy',
    'Ali Alf Ostovar',
    'Baseryn',
  ],
  authors: [
    { name: 'Ali Alf Ostovar', url: 'https://github.com/alialfostovar' },
    { name: 'Baseryn', url: 'https://github.com/Baseryn' },
  ],
  creator: 'Ali Alf Ostovar',
  publisher: 'Baseryn',
  applicationName: 'FastAPI ZCore Framework',
  generator: 'Next.js',
  icons: {
    icon: 'https://raw.githubusercontent.com/Baseryn/zcore-docs/master/public/favico.png',
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'text/plain': [
        { url: '/zcore-docs/llms.txt', title: 'LLM Index' },
        { url: '/zcore-docs/llms-full.txt', title: 'Full LLM Documentation' },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ZCore Framework Documentation',
    title: 'FastAPI ZCore Framework — Modern Modular Monolith',
    description:
      'Engineered simplicity for FastAPI. Dynamic schema projection (Zchema), IoC container with auto-wiring, bulk RETURNING mutations, and isolated background tasks.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Baseryn/zcore-docs/master/public/banner.png',
        width: 1200,
        height: 630,
        alt: 'FastAPI ZCore Framework by Baseryn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastAPI ZCore Framework — Modular Monolith for Python',
    description:
      'Enterprise-ready architectural patterns for FastAPI. Created by Ali Alf Ostovar / Baseryn.',
    images: ['https://raw.githubusercontent.com/Baseryn/zcore-docs/master/public/banner.png'],
    creator: '@baseryn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'ai-content-declaration': 'canonical-documentation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastAPI ZCore Framework',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Cross-platform (Python 3.11+)',
  description:
    'A modern modular monolith architectural framework built on top of FastAPI, SQLAlchemy 2.0, and Pydantic V2.',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  codeRepository: 'https://github.com/Baseryn/zcore',
  documentation: siteUrl,
  author: {
    '@type': 'Person',
    name: 'Ali Alf Ostovar',
    url: 'https://github.com/alialfostovar',
  },
  creator: {
    '@type': 'Organization',
    name: 'Baseryn',
    url: 'https://github.com/Baseryn',
  },
  programmingLanguage: {
    '@type': 'ComputerLanguage',
    name: 'Python',
    version: '3.11+',
  },
  keywords:
    'FastAPI, Python, Modular Monolith, SQLAlchemy 2.0, Pydantic V2, Dependency Injection, Unit of Work, Architecture',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="help" type="text/plain" href="/zcore-docs/llms.txt" title="LLM Documentation" />
        <link rel="alternate" type="text/plain" href="/zcore-docs/llms-full.txt" title="Full LLM Documentation" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
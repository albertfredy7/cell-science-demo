import { siteConfig } from '@/lib/siteConfig';
import type { Metadata, Viewport } from 'next';
import './globals.css';



export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    creator: siteConfig.creator,
    openGraph: {
        type: 'website',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                alt: siteConfig.name,
            },
        ],
    },
}

export const viewport: Viewport = {
    themeColor: '#f0f0f0',
    userScalable: false,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel='shortcut icon' href='/favicon/favicon.ico' type='image/x-icon' />
                <link rel='icon' href='/favicon/favicon.ico' type='image/x-icon' />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}

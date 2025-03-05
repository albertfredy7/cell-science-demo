import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
    title: 'Cell Science',
    description: 'Timeless Living, Backed by Science',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'EventPulse — Generative Event Operations',
    description: 'Dynamic, role-adaptive interfaces for mission-critical event management',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.variable} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}

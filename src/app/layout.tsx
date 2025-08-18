import { Header } from '@/widgets/header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Todo Board',
    description: 'A simple todo board application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`flex h-screen flex-col ${poppins.variable} antialiased`}
            >
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}

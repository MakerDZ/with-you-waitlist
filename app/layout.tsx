import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'WithYou AI',
        description: `Your Ally in Achieving Life's Goals`,
        images: '/opengraph.png',
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body className="bg-lines min-h-screen h-full bg-gradient-to-r from-[#F3F6FF] to-white font-nunito overflow-x-hidden">
                <div className="relative w-full h-full">{children}</div>
            </body>
        </html>
    );
}

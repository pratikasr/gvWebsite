import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Green Vista Realty | Premium Real Estate Developers",
    description: "Green Vista Realty and Developers Pvt Ltd - Creating world-class residential and commercial properties. Discover your dream home with India's trusted real estate developer.",
    keywords: "real estate, property, homes, apartments, villas, luxury homes, Green Vista, developers",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

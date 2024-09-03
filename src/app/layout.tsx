import type { Metadata } from "next";
import "./globals.css";
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "La Libre - Cooperativa de libros y cultura",
  description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
  openGraph: {
    title: "La Libre - Cooperativa de libros y cultura",
    description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
    images: [
      {
        url: "https://la-libre.vercel.app/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Descripción de la imagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Libre - Cooperativa de libros y cultura",
    description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
    images: ["https://la-libre.vercel.app/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.main}>{children}</body>
    </html>
  );
}

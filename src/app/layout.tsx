import type { Metadata } from "next";
import "./globals.css";
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "La Libre - Cooperativa de libros y cultura",
  description: "Librería alternativa y centro cultural, ubicada en el barrio de San Telmo, en Buenos Aires.",
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

import { Inter } from "next/font/google";
import "./ui/globals.css";
import Shell from "./components/Shell";
const inter = Inter({ subsets: ["latin"], display: "swap" });
export const metadata = {
  title: "Pedro Loria | Full Stack Developer",
  description:
    "Soy Pedro Loria. Desarrollo productos web, sistemas de gestión y herramientas financieras con React, Next.js y Node.js. Conocé mis proyectos y cómo trabajo.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

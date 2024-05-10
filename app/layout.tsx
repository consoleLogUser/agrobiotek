import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/components/ui/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "AGROBIOTEK INGENIERIE",
  description: " Découvrez comment AGROBIOTEK-INGÉNIERIE, leader de la revitalisation des sols, transforme les déserts en oasis fertiles grâce à des solutions innovantes et respectueuses de l'environnement. Restauration des terres arides, sécurité alimentaire et durabilité environnementale sont au cœur de notre mission. Rejoignez-nous dans cette nouvelle ère de prospérité agricole !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

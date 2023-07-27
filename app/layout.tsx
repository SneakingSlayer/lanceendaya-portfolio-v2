import "./globals.css";
import type { Metadata } from "next";
import { RootLayout as ParentLayout } from "@/components";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Lance Endaya",
  description:
    "Hi! I am Lance Endaya and I'm a Software Engineer primarily focused on enhancing your web experience. I recently graduated from Malayan Colleges, MAPUA as a Computer Science major.",
  openGraph: {
    title: "Lance Endaya",
    description:
      "Hi! I am Lance Endaya and I'm a Software Engineer primarily focused on enhancing your web experience. I recently graduated from Malayan Colleges, MAPUA as a Computer Science major.",
    images: "https://i.ibb.co/B44gwXZ/og.png",
    type: "website",
    url: "https://lanceendaya.online",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("mode") ?? { value: "dark" };
  return <ParentLayout mode={theme.value as Modes}>{children}</ParentLayout>;
}

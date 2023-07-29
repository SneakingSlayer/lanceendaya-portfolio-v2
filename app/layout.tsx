import "./globals.css";
import { RootLayout as ParentLayout } from "@/components";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lance Endaya",
  description:
    "Hi! I am Lance Endaya and I'm a Software Engineer primarily focused on enhancing your web experience. I am a Computer Science major from MAPUA, Malayan Colleges.",
  openGraph: {
    title: "Lance Endaya",
    description:
      "Hi! I am Lance Endaya and I'm a Software Engineer primarily focused on enhancing your web experience. I am a Computer Science major from MAPUA, Malayan Colleges.",
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

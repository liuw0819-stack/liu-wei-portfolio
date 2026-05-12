import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "刘威 · 产品经理 | GTM专家",
  description: "9年产品开发与GTM上市经验，冈本品牌成人用品产品负责人，日语N1，累计销售额超2000万元",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "ONC Mold Components & Solutions",
  description: "Website giới thiệu linh kiện tiêu chuẩn khuôn mẫu và giải pháp kỹ thuật của ONC.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

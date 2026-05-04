import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PicPay Card Demo",
  description: "PicPay Card request flow - Session Replay Demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div
          style={{
            width: 390,
            minHeight: 844,
            maxWidth: "100vw",
            background: "var(--picpay-dark)",
            color: "var(--picpay-text)",
            position: "relative",
            overflow: "hidden",
            borderRadius: 40,
            boxShadow: "0 0 60px rgba(33,194,94,0.15)",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import GreenButton from "@/components/GreenButton";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

export default function CardOfferPage() {
  const router = useRouter();

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Card Offer", "card_request");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader showClose={false} />
      <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 24, lineHeight: 1.3 }}>
          Temos um PicPay Card<br />pra você!
        </h1>

        {/* Stylized Card */}
        <div
          style={{
            width: 280, height: 170, borderRadius: 16,
            background: "linear-gradient(135deg, #21C25E 0%, #1A1A2E 100%)",
            padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between",
            marginBottom: 32, boxShadow: "0 8px 32px rgba(33,194,94,0.3)",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700 }}>PicPay</div>
          <div>
            <div style={{ fontSize: 13, opacity: 0.7, letterSpacing: 3 }}>platinum</div>
          </div>
        </div>

        <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, alignSelf: "flex-start" }}>
          Benefícios exclusivos:
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ color: "#21C25E", fontSize: 20 }}>💰</span>
            <p style={{ margin: 0, fontSize: 14, color: "#A0A0B0", lineHeight: 1.5 }}>
              <strong style={{ color: "white" }}>0,5% de cashback</strong> em todas as compras no crédito
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ color: "#21C25E", fontSize: 20 }}>📈</span>
            <p style={{ margin: 0, fontSize: 14, color: "#A0A0B0", lineHeight: 1.5 }}>
              <strong style={{ color: "white" }}>Mais Limite:</strong> seu dinheiro guardado no Cofrinho do Cartão multiplica em Limite Extra
            </p>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12, paddingBottom: 32 }}>
          <GreenButton
            onClick={() => {
              trackButtonClicked("Quero Platinum com cashback", "Card Offer", "card_request");
              router.push("/income");
            }}
          >
            Quero Platinum com cashback
          </GreenButton>
          <GreenButton
            variant="outline"
            onClick={() => {
              trackButtonClicked("Quero Platinum sem cashback", "Card Offer", "card_request");
              router.push("/income");
            }}
          >
            Quero Platinum sem cashback
          </GreenButton>
        </div>
      </div>
    </div>
  );
}

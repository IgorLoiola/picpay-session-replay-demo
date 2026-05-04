"use client";

import { useEffect } from "react";
import StatusBar from "@/components/StatusBar";
import { initMixpanel, trackScreenViewed } from "@/lib/mixpanel";

export default function SuccessPage() {
  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Card Requested Success", "card_request");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
        <div style={{
          width: 80, height: 80, borderRadius: 40, background: "#21C25E",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24, fontSize: 40,
        }}>
          ✓
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
          Seu PicPay Card<br />foi solicitado!
        </h1>
        <p style={{ color: "#A0A0B0", fontSize: 15, lineHeight: 1.5 }}>
          Agora é só aguardar. Você receberá seu cartão em até 10 dias úteis.
        </p>
      </div>
    </div>
  );
}

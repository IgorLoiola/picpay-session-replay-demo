"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

export default function AddressPage() {
  const router = useRouter();

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Delivery Address", "CARTOES");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/income" />
      <div style={{ padding: "0 24px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
          Onde você quer receber seu<br />PicPay Card?
        </h1>
        <p style={{ color: "#A0A0B0", fontSize: 14, marginBottom: 32, lineHeight: 1.5 }}>
          Alguém precisa estar presente em horário comercial para receber seu cartão.
        </p>

        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>No meu endereço</p>
        <button
          onClick={() => {
            trackButtonClicked("No meu endereco", "Delivery Address", "CARTOES");
            router.push("/cep");
          }}
          style={{
            width: "100%", background: "#2A2A3E", border: "none", borderRadius: 12,
            padding: 16, color: "white", textAlign: "left", cursor: "pointer",
            display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 14, marginBottom: 4 }}>R Pe Bernardino Pessoa, 415</div>
            <div style={{ fontSize: 13, color: "#A0A0B0" }}>Apt 2101</div>
            <div style={{ fontSize: 13, color: "#A0A0B0" }}>Boa Viagem - Recife/PE</div>
          </div>
          <span style={{ fontSize: 18, color: "#A0A0B0" }}>›</span>
        </button>

        <button
          onClick={() => {
            trackButtonClicked("Em outro endereco", "Delivery Address", "CARTOES");
            router.push("/cep");
          }}
          style={{ background: "none", border: "none", color: "#21C25E", fontSize: 14, cursor: "pointer", padding: 0 }}
        >
          Em outro endereço ›
        </button>
      </div>
    </div>
  );
}

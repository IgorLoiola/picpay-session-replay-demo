"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import NumericKeypad from "@/components/NumericKeypad";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

export default function CepPage() {
  const router = useRouter();
  const [cep, setCep] = useState("");

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("CEP Input", "CARTOES");
  }, []);

  useEffect(() => {
    if (cep.length === 8) {
      trackButtonClicked("CEP Submitted", "CEP Input", "CARTOES", { cep });
      const t = setTimeout(() => router.push("/street-number"), 500);
      return () => clearTimeout(t);
    }
  }, [cep, router]);

  const formatted = cep.length > 5 ? `${cep.slice(0, 5)}-${cep.slice(5)}` : cep;

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/address" />
      <div style={{ flex: 1, padding: "0 24px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 32 }}>
          Digite o CEP do seu endereço
        </h1>
        <div className="mp-mask" style={{
          fontSize: 28, fontWeight: 600, textAlign: "center", padding: "16px 0",
          borderBottom: "2px solid #21C25E", marginBottom: 16, minHeight: 50,
          color: cep ? "white" : "#A0A0B0",
        }}>
          {formatted || ""}
          <span style={{ animation: "blink 1s infinite", borderRight: "2px solid #21C25E", marginLeft: 2 }}>&nbsp;</span>
        </div>
        <button style={{ background: "none", border: "none", color: "#21C25E", fontSize: 14, cursor: "pointer", padding: 0 }}>
          Não sei meu CEP
        </button>
      </div>
      <NumericKeypad
        onKey={(k) => setCep((prev) => prev.length < 8 ? prev + k : prev)}
        onDelete={() => setCep((prev) => prev.slice(0, -1))}
      />
    </div>
  );
}

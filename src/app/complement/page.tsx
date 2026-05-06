"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import GreenButton from "@/components/GreenButton";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

export default function ComplementPage() {
  const router = useRouter();
  const [complement, setComplement] = useState("");

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Complement", "CARTOES");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/street-number" />
      <div style={{ flex: 1, padding: "0 24px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Digite o complemento</h1>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Av Jamaris, 543</p>
        <p style={{ fontSize: 13, color: "#A0A0B0", marginBottom: 24 }}>Planalto Paulista, São Paulo - SP, 04078001</p>

        <input
          className="mp-mask"
          type="text"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
          placeholder="Apt, bloco, sala..."
          style={{
            width: "100%", padding: "16px", fontSize: 18, background: "#333350",
            border: "none", borderRadius: 12, color: "white", outline: "none",
            marginBottom: 24, boxSizing: "border-box",
          }}
        />

        <div style={{ marginBottom: 12 }}>
          <GreenButton
            disabled={!complement}
            onClick={() => {
              trackButtonClicked("Continuar", "Complement", "CARTOES", { complement });
              router.push("/due-date");
            }}
          >
            Continuar
          </GreenButton>
        </div>
        <button
          onClick={() => {
            trackButtonClicked("Endereco sem complemento", "Complement", "CARTOES");
            router.push("/due-date");
          }}
          style={{ background: "none", border: "none", color: "#21C25E", fontSize: 14, cursor: "pointer", padding: 0, width: "100%", textAlign: "center" }}
        >
          Endereço sem complemento
        </button>
      </div>
    </div>
  );
}

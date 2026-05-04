"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import NumericKeypad from "@/components/NumericKeypad";
import GreenButton from "@/components/GreenButton";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

export default function StreetNumberPage() {
  const router = useRouter();
  const [number, setNumber] = useState("");

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Street Number", "card_request");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/cep" />
      <div style={{ flex: 1, padding: "0 24px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>
          Digite o número da sua<br />residência
        </h1>
        <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Av Jamaris</p>
        <p style={{ fontSize: 13, color: "#A0A0B0", marginBottom: 24 }}>Planalto Paulista, São Paulo - SP, 04078001</p>

        <div style={{
          fontSize: 28, fontWeight: 600, textAlign: "center", padding: "16px 0",
          borderBottom: "2px solid #21C25E", marginBottom: 16, minHeight: 50,
          color: number ? "white" : "#A0A0B0",
        }}>
          {number || ""}
          <span style={{ borderRight: "2px solid #21C25E", marginLeft: 2 }}>&nbsp;</span>
        </div>

        <div style={{ marginBottom: 12 }}>
          <GreenButton
            disabled={!number}
            onClick={() => {
              trackButtonClicked("Continuar", "Street Number", "card_request", { street_number: number });
              router.push("/complement");
            }}
          >
            Continuar
          </GreenButton>
        </div>
        <button
          onClick={() => {
            trackButtonClicked("Endereco sem numero", "Street Number", "card_request");
            router.push("/complement");
          }}
          style={{ background: "none", border: "none", color: "#21C25E", fontSize: 14, cursor: "pointer", padding: 0, width: "100%", textAlign: "center" }}
        >
          Endereço sem número
        </button>
      </div>
      <NumericKeypad
        onKey={(k) => setNumber((prev) => prev.length < 6 ? prev + k : prev)}
        onDelete={() => setNumber((prev) => prev.slice(0, -1))}
      />
    </div>
  );
}

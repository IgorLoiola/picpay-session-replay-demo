"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import NumericKeypad from "@/components/NumericKeypad";
import GreenButton from "@/components/GreenButton";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

export default function IncomePage() {
  const router = useRouter();
  const [cents, setCents] = useState(0);

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Monthly Income", "CARTOES");
  }, []);

  const formatted = `R$ ${(cents / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/card-offer" />
      <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Informe sua renda mensal</h1>
        <p style={{ color: "#A0A0B0", fontSize: 14, marginBottom: 4, lineHeight: 1.5 }}>
          Some os valores que você recebe por mês (salário bruto, pensão, etc).
        </p>
        <button style={{ background: "none", border: "none", color: "#21C25E", fontSize: 14, padding: 0, cursor: "pointer", textAlign: "left", marginBottom: 24 }}>
          Saiba o motivo
        </button>
        <div className="mp-mask" style={{ fontSize: 32, fontWeight: 700, textAlign: "center", padding: "24px 0", color: cents > 0 ? "white" : "#A0A0B0" }}>
          {formatted}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ marginBottom: 12 }}>
          <GreenButton
            disabled={cents === 0}
            onClick={() => {
              trackButtonClicked("Continuar", "Monthly Income", "CARTOES", { income_value: cents / 100 });
              router.push("/address");
            }}
          >
            Continuar
          </GreenButton>
        </div>
      </div>
      <NumericKeypad
        onKey={(k) => setCents((prev) => {
          const next = prev * 10 + parseInt(k);
          return next > 99999999 ? prev : next;
        })}
        onDelete={() => setCents((prev) => Math.floor(prev / 10))}
      />
    </div>
  );
}

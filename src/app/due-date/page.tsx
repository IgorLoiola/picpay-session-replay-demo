"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import { initMixpanel, trackScreenViewed, trackButtonClicked } from "@/lib/mixpanel";

const dueDates = [5, 10, 15, 20, 25];

export default function DueDatePage() {
  const router = useRouter();

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Due Date", "card_request");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/complement" />
      <div style={{ padding: "0 24px" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
          Escolha o dia de vencimento da sua fatura
        </h1>
        <p style={{ color: "#A0A0B0", fontSize: 14, marginBottom: 32, lineHeight: 1.5 }}>
          Você só pode alterar a data de vencimento da fatura novamente após 90 dias.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {dueDates.map((day) => (
            <button
              key={day}
              onClick={() => {
                trackButtonClicked(`Todo dia ${day}`, "Due Date", "card_request", { due_date: day });
                router.push("/confirmation");
              }}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                width: "100%", padding: "18px 16px", background: "#2A2A3E",
                border: "none", color: "white", fontSize: 16, cursor: "pointer",
                borderRadius: 0,
              }}
            >
              <span>Todo dia {day}</span>
              <span style={{ color: "#A0A0B0" }}>›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

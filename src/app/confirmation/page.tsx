"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import ScreenHeader from "@/components/ScreenHeader";
import GreenButton from "@/components/GreenButton";
import { initMixpanel, trackScreenViewed, trackButtonClicked, trackCardOrdered } from "@/lib/mixpanel";

export default function ConfirmationPage() {
  const router = useRouter();
  const [insurance, setInsurance] = useState(false);

  useEffect(() => {
    initMixpanel();
    trackScreenViewed("Confirmation", "CARTOES");
  }, []);

  return (
    <div style={{ minHeight: 844, display: "flex", flexDirection: "column" }}>
      <StatusBar />
      <ScreenHeader backPath="/due-date" />
      <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Confirme seus dados</h1>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: "#A0A0B0", marginBottom: 4 }}>Endereço de entrega</p>
          <p style={{ fontSize: 15, fontWeight: 500, margin: 0, lineHeight: 1.5 }}>
            Av Jamaris, 543<br />
            <span style={{ color: "#A0A0B0" }}>Planalto Paulista - São Paulo/SP</span>
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: "#A0A0B0", marginBottom: 4 }}>Vencimento da fatura</p>
          <p style={{ fontSize: 15, fontWeight: 500, margin: 0 }}>Todo dia 5</p>
        </div>

        <div style={{
          background: "#2A2A3E", borderRadius: 12, padding: 16, marginBottom: 20,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "#21C25E", fontWeight: 700 }}>1 MÊS GRÁTIS</span>
            <button
              onClick={() => {
                setInsurance(!insurance);
                trackButtonClicked(insurance ? "Insurance Disabled" : "Insurance Enabled", "Confirmation", "CARTOES");
              }}
              style={{
                width: 44, height: 24, borderRadius: 12, border: "none", cursor: "pointer",
                background: insurance ? "#21C25E" : "#333350", position: "relative", transition: "background 0.2s",
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: 10, background: "white",
                position: "absolute", top: 2, left: insurance ? 22 : 2, transition: "left 0.2s",
              }} />
            </button>
          </div>
          <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>Seguro Carteira Digital</p>
          <p style={{ fontSize: 13, color: "#A0A0B0", margin: 0, lineHeight: 1.4 }}>
            Proteja seu novo cartão e as contas conectadas à sua carteira. Apenas R$8,50/mês
          </p>
        </div>

        <p style={{ fontSize: 11, color: "#A0A0B0", lineHeight: 1.5, marginBottom: 20 }}>
          Ao continuar, declaro que li e concordo com o <a href="https://lp.allmedtech.com.br/politica-privacidade" target="_blank" rel="noopener noreferrer" style={{ color: "#21C25E", textDecoration: "underline" }}>Contrato de Cartão de Crédito do PicPay</a> e autorizo, por prazo indeterminado: o débito automático do valor total ou parcial da fatura em minha conta na data do vencimento e eventuais encargos.
        </p>

        <div style={{ marginTop: "auto", paddingBottom: 32 }}>
          <GreenButton
            onClick={() => {
              trackButtonClicked("Solicitar PicPay Card", "Confirmation", "CARTOES");
              trackCardOrdered({
                card_type: "Platinum",
                cashback: true,
                due_date: 5,
                insurance_enabled: insurance,
                delivery_address: "Av Jamaris, 543 - Planalto Paulista, São Paulo/SP",
              });
              router.push("/success");
            }}
          >
            Solicitar PicPay Card
          </GreenButton>
        </div>
      </div>
    </div>
  );
}

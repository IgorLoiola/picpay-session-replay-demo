"use client";

interface GreenButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "outline";
}

export default function GreenButton({ children, onClick, disabled = false, variant = "primary" }: GreenButtonProps) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        padding: "16px 24px",
        borderRadius: 12,
        background: isPrimary ? (disabled ? "#333350" : "var(--picpay-green)") : "transparent",
        border: isPrimary ? "none" : "1px solid var(--picpay-green)",
        color: isPrimary ? (disabled ? "var(--picpay-text-secondary)" : "white") : "var(--picpay-green)",
        fontSize: 16,
        fontWeight: 600,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      {children}
      {!disabled && <span>→</span>}
    </button>
  );
}

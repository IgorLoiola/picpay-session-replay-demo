"use client";

interface NumericKeypadProps {
  onKey: (key: string) => void;
  onDelete: () => void;
  onSubmit?: () => void;
}

const keys = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
const subLabels: Record<string, string> = {
  "2": "ABC", "3": "DEF", "4": "GHI", "5": "JKL", "6": "MNO",
  "7": "PQRS", "8": "TUV", "9": "WXYZ",
};

export default function NumericKeypad({ onKey, onDelete, onSubmit }: NumericKeypadProps) {
  return (
    <div style={{ padding: "8px 16px", background: "var(--picpay-dark)" }}>
      {keys.map((row, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 12 }}>
          {row.map((k) => (
            <button
              key={k}
              onClick={() => onKey(k)}
              style={{
                width: 72, height: 52, borderRadius: 8,
                background: "transparent", border: "none", color: "white",
                fontSize: 28, fontWeight: 300, cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}
            >
              <span>{k}</span>
              {subLabels[k] && <span style={{ fontSize: 9, color: "var(--picpay-text-secondary)", letterSpacing: 2 }}>{subLabels[k]}</span>}
            </button>
          ))}
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
        <div style={{ width: 72 }} />
        <button
          onClick={() => onKey("0")}
          style={{ width: 72, height: 52, borderRadius: 8, background: "transparent", border: "none", color: "white", fontSize: 28, fontWeight: 300, cursor: "pointer" }}
        >
          0
        </button>
        <button
          onClick={onDelete}
          style={{ width: 72, height: 52, borderRadius: 8, background: "transparent", border: "none", color: "white", fontSize: 20, cursor: "pointer" }}
        >
          ⌫
        </button>
      </div>
    </div>
  );
}

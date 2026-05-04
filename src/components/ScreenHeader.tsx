"use client";

import { useRouter } from "next/navigation";

interface ScreenHeaderProps {
  backPath?: string;
  showClose?: boolean;
}

export default function ScreenHeader({ backPath, showClose = true }: ScreenHeaderProps) {
  const router = useRouter();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 20px" }}>
      {backPath ? (
        <button onClick={() => router.push(backPath)} style={{ background: "none", border: "none", color: "white", fontSize: 24, cursor: "pointer", padding: 4 }}>
          ←
        </button>
      ) : <div style={{ width: 32 }} />}
      {showClose && (
        <button style={{ background: "none", border: "none", color: "white", fontSize: 20, cursor: "pointer", padding: 4 }}>
          ✕
        </button>
      )}
    </div>
  );
}

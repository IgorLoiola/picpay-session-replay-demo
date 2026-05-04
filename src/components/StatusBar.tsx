"use client";

export default function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: false });
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px 8px", fontSize: 14, fontWeight: 600 }}>
      <span>{time}</span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 3.5C9.8 3.5 11.4 4.2 12.6 5.4L14 4C12.4 2.4 10.3 1.5 8 1.5S3.6 2.4 2 4L3.4 5.4C4.6 4.2 6.2 3.5 8 3.5Z"/><path d="M8 6.5C9.1 6.5 10.1 6.9 10.8 7.6L12.2 6.2C11.1 5.1 9.6 4.5 8 4.5S4.9 5.1 3.8 6.2L5.2 7.6C5.9 6.9 6.9 6.5 8 6.5Z"/><circle cx="8" cy="10" r="1.5"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2" stroke="white"/><rect x="22" y="3.5" width="2" height="5" rx="1" fill="white"/><rect x="2" y="2" width="14" height="8" rx="1" fill="#21C25E"/></svg>
      </div>
    </div>
  );
}

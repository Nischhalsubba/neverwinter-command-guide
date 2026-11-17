"use client";

import { useEffect, useRef, useState } from "react";

export function CopyCommandButton({ value, className = "", label = "Copy", successLabel = "Copied" }) {
  const [status, setStatus] = useState("idle");
  const resetTimer = useRef(null);

  useEffect(() => () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
  }, []);

  async function handleCopy() {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(value);
      setStatus("success");
    } catch {
      setStatus("error");
    }
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <button type="button" className={className} onClick={handleCopy}>
      <span role="status" aria-live="polite">
        {status === "success" ? successLabel : status === "error" ? "Copy failed" : label}
      </span>
      <span className="srOnly"> command syntax {value}</span>
    </button>
  );
}

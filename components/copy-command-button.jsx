"use client";

import { useState } from "react";

export function CopyCommandButton({ value, className = "", label = "Copy", successLabel = "Copied" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className={className} onClick={handleCopy}>
      {copied ? successLabel : label}
      <span className="srOnly"> command syntax {value}</span>
    </button>
  );
}

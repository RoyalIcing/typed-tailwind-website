import React, { useRef, useEffect } from "react";

declare global {
  interface Window {
    Prism: {
      highlightElement(code: HTMLElement): void
    }
  }
}

export default function Code({ code, language }: { code: string, language: "js" | "jsx" | "ts" | "tsx" }) {
  const codeRef: React.MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    if (codeRef.current && window.Prism) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return <pre><code className={`language-${language}`} ref={codeRef}>{code}</code></pre>;
}
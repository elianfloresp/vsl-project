// Decisão de Arquitetura:
// Optei por criar um hook centralizado para garantir que, mesmo se adicionarmos
// novas páginas no futuro, a persistência das UTMs seja automática e não dependa
// do desenvolvedor lembrar de passar props manualmente.

import { useSearchParams } from "react-router-dom";

export function useUTM() {
  const [searchParams] = useSearchParams();

  const getUTMString = () => {
    const params = new URLSearchParams();
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];

    utmKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        params.set(key, value);
      }
    });

    return params.toString();
  };
  const appendUTM = (url: string) => {
    const utmString = getUTMString();
    if (!utmString) return url;
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}${utmString}`;
  };

  return {
    getUTMString,
    appendUTM,
  };
}

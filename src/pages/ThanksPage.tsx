import { CheckCircle, ArrowRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useUTM } from "../hooks/useUTM";

export function ThankYouPage() {
  const [searchParams] = useSearchParams();
  const { appendUTM } = useUTM();
  const backToHomeLink = appendUTM("/");
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-brand-dark">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border-t-8 border-green-500 animate-scale-up">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle
              size={64}
              className="text-green-600 animate-bounce-slow"
            />
          </div>
        </div>
        <h1 className="text-3xl font-black mb-4 text-gray-900">Parabéns!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sua inscrição foi confirmada. Você acabou de dar o primeiro passo para
          recuperar sua vitalidade.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-8 text-left border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800 mb-1">Próximos Passos:</h3>
          <p className="text-sm text-blue-700">
            Verifique seu e-mail (inclusive a caixa de spam). Seu acesso chegará
            em até 5 minutos.
          </p>
        </div>
        <a
          href={backToHomeLink}
          className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium mb-8"
        >
          Voltar para a página inicial <ArrowRight size={14} />
        </a>
        <div className="mt-8 border-t border-gray-100 pt-8 text-left">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center">
            Parâmetros Rastreados (Debug)
          </p>
          <div className="bg-gray-800 rounded-lg p-4 font-mono text-xs text-green-400 shadow-inner">
            {utmKeys.map((key) => {
              const value = searchParams.get(key);
              if (!value) return null;
              return (
                <div
                  key={key}
                  className="mb-2 last:mb-0 border-b border-gray-700 last:border-0 pb-2 last:pb-0"
                >
                  <span className="text-gray-500 block mb-1">{key}:</span>
                  <span className="font-bold text-white break-all whitespace-normal">
                    {value}
                  </span>
                </div>
              );
            })}
            {!Array.from(searchParams).length && (
              <p className="text-gray-500 italic text-center">
                Nenhuma UTM detectada na URL.
              </p>
            )}
          </div>
          <p className="text-[10px] text-gray-400 mt-2 text-center">
            * Esta área é visível apenas para fins de validação do teste
            técnico.
          </p>
        </div>
      </div>
    </div>
  );
}

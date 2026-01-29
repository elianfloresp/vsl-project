import { ShieldCheck, Lock, CreditCard } from "lucide-react";
import { useUTM } from "../hooks/useUTM";

export function CheckoutPage() {
  const { appendUTM } = useUTM();
  const finalLink = appendUTM("/obrigado");
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 pb-12">
      <header className="bg-white border-b border-gray-200 py-4 mb-8">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-green-600" />
            <span className="font-bold text-lg text-gray-700">
              Pagamento Seguro
            </span>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Lock size={12} /> Ambiente Criptografado
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Dados Pessoais
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome Completo"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-primary"
              />
              <input
                type="email"
                placeholder="Seu Melhor E-mail"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-primary"
              />
              <input
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-primary"
              />
            </div>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Pagamento
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="flex-1 bg-brand-primary/10 border-2 border-brand-primary text-brand-primary font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors hover:bg-brand-primary/20">
                <CreditCard size={20} className="shrink-0" />
                <span>Cartão de Crédito</span>
              </button>
              <button className="flex-1 border border-gray-200 text-gray-500 font-bold py-3 rounded hover:bg-gray-50 transition-colors">
                PIX
              </button>
            </div>
            <div className="space-y-4 opacity-75 pointer-events-none select-none">
              <input
                type="text"
                placeholder="Número do Cartão"
                className="w-full border border-gray-300 rounded p-3"
                defaultValue="4444 4444 4444 4444"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Validade (MM/AA)"
                  className="w-full border border-gray-300 rounded p-3"
                  defaultValue="12/28"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border border-gray-300 rounded p-3"
                  defaultValue="123"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
            <h3 className="font-bold text-gray-700 mb-4 border-b pb-2">
              Resumo do Pedido
            </h3>
            <div className="flex gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=150"
                alt="Capa do Produto"
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <p className="font-bold text-sm">Protocolo Vitalidade 360º</p>
                <p className="text-xs text-green-600 font-bold">
                  Oferta Ativada
                </p>
              </div>
            </div>
            <div className="flex justify-between text-sm mb-2 text-gray-500">
              <span>Preço Original:</span>
              <span className="line-through">R$ 297,00</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-green-600 mb-6">
              <span>Você paga:</span>
              <span>R$ 97,00</span>
            </div>
            <a
              href={finalLink}
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-4 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              FINALIZAR COMPRA
            </a>
            <div className="mt-4 flex justify-center gap-2 opacity-50">
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
            </div>

            <p className="mt-4 text-xs text-center text-gray-400">
              Ao clicar em finalizar, você concorda com nossos termos. Acesso
              liberado imediatamente após confirmação.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import { ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-400 py-12 mt-12 pb-32 md:pb-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4 text-white">
            <ShieldCheck className="text-brand-accent" size={28} />
            <span className="text-xl font-bold tracking-tight">
              Protocolo Vitalidade
            </span>
          </div>
          <p className="text-sm mb-6 max-w-xs">
            Nossa missão é devolver sua energia e vitalidade através de métodos
            naturais e validados.
          </p>
          <div className="mt-auto text-xs opacity-80">
            <p>© {currentYear} Protocolo Vitalidade Ltda.</p>
            <p>CNPJ Fictício: 00.000.000/0001-00</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
            Acesso Rápido
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <button className="hover:text-brand-accent transition-colors duration-200">
                Política de Privacidade
              </button>
            </li>
            <li>
              <button className="hover:text-brand-accent transition-colors duration-200">
                Termos de Uso
              </button>
            </li>
            <li>
              <button className="hover:text-brand-accent transition-colors duration-200">
                Dúvidas Frequentes (FAQ)
              </button>
            </li>
            <li>
              <button className="hover:text-brand-accent transition-colors duration-200">
                Atendimento ao Cliente
              </button>
            </li>
          </ul>
        </div>

        <div className="text-xs space-y-4 leading-relaxed opacity-70 bg-white/5 p-4 rounded-lg">
          <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-2 opacity-100">
            Aviso Legal
          </h3>
          <p>
            <strong>Resultados podem variar:</strong> Os depoimentos
            apresentados são de clientes reais, mas não garantem que você terá
            os mesmos resultados. O sucesso depende da aplicação correta do
            método.
          </p>
          <div className="border-t border-white/10 my-2"></div>
          <p>
            Este site não é afiliado ao Facebook, Google ou qualquer outra
            plataforma de anúncios. A responsabilidade pelo conteúdo e suporte é
            exclusivamente nossa.
          </p>
        </div>
      </div>
    </footer>
  );
}

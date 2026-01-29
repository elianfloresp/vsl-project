import { ShieldCheck, Check } from 'lucide-react';
import { CtaButton } from './Ctabutton';

interface ProductOfferProps {
  checkoutLink: string;
}

export function ProductOffer({ checkoutLink }: ProductOfferProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-inner my-12" aria-label="Oferta do Produto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Oferta Especial por Tempo Limitado
        </h2>
        <p className="text-gray-600">Tudo o que você precisa para mudar de vida hoje.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
                <div className="w-full md:w-1/3 flex justify-center">
            <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" 
                alt="Capa do Livro Digital Protocolo Vitalidade" 
                className="rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 max-w-[200px] md:max-w-full"
            />
        </div>
        <div className="w-full md:w-2/3 space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <div className="flex gap-3">
            <div className="mt-1 bg-green-100 p-1 rounded-full h-fit"><Check size={16} className="text-green-600" /></div>
            <div>
                <span className="font-bold text-gray-800">Protocolo Vitalidade 360º</span>
                <p className="text-sm text-gray-500">O guia digital completo (PDF)</p>
            </div>
            </div>
            <div className="flex gap-3">
            <div className="mt-1 bg-green-100 p-1 rounded-full h-fit"><Check size={16} className="text-green-600" /></div>
            <div>
                <span className="font-bold text-gray-800">Bônus: Guia do Sono Profundo</span>
                <p className="text-sm text-gray-500">Para dormir como um bebê</p>
            </div>
            </div>
            <div className="flex gap-3">
            <div className="mt-1 bg-green-100 p-1 rounded-full h-fit"><ShieldCheck size={16} className="text-green-600" /></div>
            <div>
                <span className="font-bold text-gray-800">Garantia Blindada de 7 Dias</span>
                <p className="text-sm text-gray-500">Risco Zero. Reembolso total.</p>
            </div>
            </div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="mb-6">
          <p className="text-gray-400 line-through text-lg">De R$ 297,00</p>
          <p className="text-5xl font-black text-brand-primary tracking-tight">R$ 97,00</p>
          <p className="text-sm text-gray-500">ou 12x de R$ 9,74</p>
        </div>
        
        <CtaButton href={checkoutLink} subtext="Compra Segura e Acesso Imediato" className="w-full" />
      </div>
    </section>
  );
}
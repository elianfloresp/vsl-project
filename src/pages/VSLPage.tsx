import { useUTM } from "../hooks/useUTM";
import { LiteYouTube } from "../components/LiteYouTube";
import { CtaButton } from "../components/Ctabutton";
import { ProductOffer } from "../components/ProductOffer";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import { StickyCTA } from "../components/StickyCTA";
import { UrgencyBar } from "../components/UrgencyBar";

export function VSLPage() {
  const { appendUTM } = useUTM();
  const checkoutLink = appendUTM("/checkout");

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-brand-dark flex flex-col">
      <UrgencyBar />
      <header className="bg-brand-dark py-8 px-4 text-center border-b-4 border-brand-accent">
        <div className="max-w-4xl mx-auto space-y-2">
          <span className="text-brand-accent font-bold tracking-wider text-xs md:text-sm uppercase">
            Atenção: Vídeo Exclusivo
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            Descubra o{" "}
            <span className="text-brand-primary">Método Secreto</span> para
            Recuperar sua Energia em Menos de 21 Dias
          </h1>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto w-full bg-white shadow-xl my-0 md:my-8 rounded-none md:rounded-2xl overflow-hidden pb-12">
        <div className="p-4 md:p-8 space-y-12">
          {" "}
          <div className="mb-10 shadow-2xl rounded-lg overflow-hidden border border-gray-200">
            <LiteYouTube videoId="dQw4w9WgXcQ" />
          </div>
          <div className="hidden md:block mb-16 text-center">
            <CtaButton href={checkoutLink} subtext="Acesso Imediato" />
          </div>
          <ProductOffer checkoutLink={checkoutLink} />
          <Testimonials />
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>Dúvidas? Entre em contato com nosso suporte.</p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyCTA href={checkoutLink} />
    </div>
  );
}

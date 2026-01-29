import { useEffect, useState } from "react";

interface StickyCTAProps {
  href: string;
}

export function StickyCTA({ href }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
      <a
        href={href}
        className="block w-full bg-green-600 text-white text-center font-bold py-3 rounded-lg shadow-md uppercase tracking-wide"
      >
        Quero meu Acesso Agora
      </a>
    </div>
  );
}

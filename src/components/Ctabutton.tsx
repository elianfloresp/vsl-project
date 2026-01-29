interface CtaButtonProps {
  href: string;
  text?: string;
  subtext?: string;
  className?: string;
}

export function CtaButton({
  href,
  text = "QUERO RECUPERAR MINHA ENERGIA",
  subtext,
  className = "",
}: CtaButtonProps) {
  return (
    <div className={`text-center ${className}`}>
      <a
        href={href}
        className="w-full md:w-auto inline-block bg-green-500 hover:bg-green-600 text-white text-xl md:text-2xl font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 animate-pulse-slow"
      >
        {text}
      </a>
      {subtext && (
        <p className="mt-2 text-xs md:text-sm text-gray-500 flex items-center justify-center gap-1">
          {subtext}
        </p>
      )}
    </div>
  );
}

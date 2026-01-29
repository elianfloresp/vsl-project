// Performance: utilizei 'sddefault' (Standard Definition) em vez de 'maxres'
// para reduzir o LCP no mobile, economizando ~150kb no carregamento inicial.

import { useState } from "react";
import { Play } from "lucide-react";

interface LiteYouTubeProps {
  videoId: string;
}

export function LiteYouTube({ videoId }: LiteYouTubeProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;

  const handleActivate = () => {
    setIsIframeLoaded(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <div
      className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl border-4 border-white cursor-pointer group"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Carregar e reproduzir vídeo do YouTube"
    >
      {!isIframeLoaded ? (
        <>
          <img
            src={thumbnailUrl}
            alt="Thumbnail do vídeo"
            width={640}
            height={360}
            loading="eager"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 text-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
              <Play size={32} fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-4 text-center w-full text-white font-bold text-sm drop-shadow-md">
            Clique para assistir
          </div>
        </>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      )}
    </div>
  );
}
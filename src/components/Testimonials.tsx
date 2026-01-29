// optei por adicionar 10 relatos estáticos, e ao atualizar a página eles são sorteados

import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

const ALL_REVIEWS = [
  {
    name: "Ricardo M.",
    text: "Eu achava que era cansaço da idade, mas era falta de método. Em 10 dias acordei antes do despertador!",
    time: "Cliente há 2 meses",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Ana Clara",
    text: "O protocolo é muito simples de seguir. Não precisa comprar comidas caras nem remédios.",
    time: "Cliente há 3 semanas",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Carlos Eduardo",
    text: "Minha produtividade no trabalho triplicou. Antes eu cochilava depois do almoço, agora fico ligado o dia todo.",
    time: "Cliente há 1 mês",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Mariana Costa",
    text: "Sou mãe de dois filhos e vivia exausta. O guia do sono salvou minha rotina. Recomendo demais!",
    time: "Cliente há 45 dias",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Roberto Campos",
    text: "Tenho 62 anos e achei que não ia funcionar pra mim. Me enganei. Voltei a caminhar no parque.",
    time: "Cliente há 3 meses",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Fernanda Lima",
    text: "Impressionante como pequenas mudanças fazem diferença. A parte sobre alimentação é reveladora.",
    time: "Cliente há 15 dias",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Paulo S.",
    text: "Eu gastava horrores com energéticos. Hoje só bebo água e sigo o protocolo. Economizei e ganhei saúde.",
    time: "Cliente há 5 meses",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Juliana Rocha",
    text: "Trabalho em turnos e meu relógio biológico era uma bagunça. O bônus do sono profundo funciona mesmo.",
    time: "Cliente há 20 dias",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Lucas Pereira",
    text: "Como programador, fico muito tempo sentado e fadigado. O método me ajudou a ter foco nas códigos.",
    time: "Cliente há 2 meses",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Beatriz Almeida",
    text: "Comprei para meu marido, mas acabei fazendo junto. Nós dois estamos nos sentindo 10 anos mais jovens.",
    time: "Cliente há 1 semana",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export function Testimonials() {
  const [randomReviews] = useState(() => {
    const shuffled = [...ALL_REVIEWS];
    shuffled.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 2);
  });

  return (
    <section className="space-y-8 py-8" aria-label="Depoimentos de Clientes">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Quem já aplicou, aprovou:
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {randomReviews.map((review, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-3">
              <img
                src={review.avatar}
                alt={`Foto de ${review.name}`}
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                loading="lazy"
              />
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <div
                  className="flex text-yellow-400 gap-0.5"
                  aria-label="Avaliação de 5 estrelas"
                >
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <div className="ml-auto flex items-center text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
                <CheckCircle size={12} className="mr-1" /> Verificado
              </div>
            </div>
            <p className="text-gray-600 italic">"{review.text}"</p>
            <p className="text-xs text-gray-400 mt-4 text-right">
              {review.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

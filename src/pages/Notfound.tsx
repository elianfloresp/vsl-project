import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center font-sans">
      <AlertTriangle size={64} className="text-yellow-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Página não encontrada
      </h1>

      <p className="text-gray-600 mb-8 max-w-md">
        O conteúdo que você tentou acessar não existe ou o link pode estar
        quebrado.
      </p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg"
      >
        Voltar para o Vídeo
      </Link>
    </div>
  );
}

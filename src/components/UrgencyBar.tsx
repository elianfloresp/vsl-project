import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function UrgencyBar() {
  const INITIAL_TIME = 15 * 60;

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("vsl_timer");
    return savedTime ? parseInt(savedTime, 10) : INITIAL_TIME;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        const newTime = prev - 1;
        localStorage.setItem("vsl_timer", newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (timeLeft === 0) return null;

  return (
    <div className="bg-red-600 text-white text-center py-1 px-4 font-bold text-xs md:text-sm sticky top-0 z-50 shadow-sm flex items-center justify-center gap-2">
      <Clock size={14} className="animate-pulse" />
      <p className="flex items-center gap-1.5">
        <span>OFERTA ENCERRA EM:</span>
        <span className="bg-white/20 backdrop-blur-sm text-white px-1.5 py-0.5 rounded font-mono font-black tracking-widest min-w-[50px] text-center">
          {formatTime(timeLeft)}
        </span>
      </p>
    </div>
  );
}

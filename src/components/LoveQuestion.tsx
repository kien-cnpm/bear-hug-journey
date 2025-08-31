import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LoveQuestionProps {
  onYes: () => void;
}

export const LoveQuestion = ({ onYes }: LoveQuestionProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoHovered, setIsNoHovered] = useState(false);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    
    setNoButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
    setIsNoHovered(true);
    
    setTimeout(() => setIsNoHovered(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-love flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-bounce-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-md mx-auto">
        <div className="text-6xl mb-8 animate-bounce-heart">💖</div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-pulse-love">
          Em có yêu anh không?
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={onYes}
            variant="secondary"
            size="lg"
            className="px-12 py-4 text-xl font-bold hover:scale-110 transition-transform duration-200 bg-white text-love-pink hover:bg-love-light"
          >
            Có ❤️
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className={`px-12 py-4 text-xl font-bold transition-all duration-300 bg-white/10 border-white text-white hover:bg-white hover:text-love-pink ${
              isNoHovered ? 'animate-pulse scale-90' : ''
            }`}
            style={{
              position: noButtonPosition.x === 0 ? 'static' : 'fixed',
              left: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.x}px`,
              top: noButtonPosition.y === 0 ? 'auto' : `${noButtonPosition.y}px`,
              zIndex: 50
            }}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            Không 💔
          </Button>
        </div>
        
        <p className="text-white/80 mt-6 text-lg animate-float">
          Suy nghĩ kỹ nhé! 🥰
        </p>
      </div>
    </div>
  );
};
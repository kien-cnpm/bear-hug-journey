import { useState, useEffect } from "react";
import pandaCar from "@/assets/panda-car.png";

interface AnimatedIntroProps {
  onComplete: () => void;
}

export const AnimatedIntro = ({ onComplete }: AnimatedIntroProps) => {
  const [hearts] = useState(Array.from({ length: 8 }, (_, i) => i));

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center overflow-hidden relative">
      {/* Animated panda car */}
      <div className="absolute animate-slide-right">
        <img 
          src={pandaCar} 
          alt="Cute panda driving car"
          className="w-32 h-32 animate-float"
        />
      </div>

      {/* Following hearts - emitted from car exhaust */}
      {hearts.map((heart, index) => (
        <div
          key={heart}
          className="absolute animate-slide-right text-love-heart text-3xl animate-bounce-heart"
          style={{
            left: `${150 + (index * 50)}px`, // Start from behind the car (to the right)
            animationDelay: `${index * 0.3}s`,
            top: '55%', // Slightly lower, like exhaust position
            transform: 'translateY(-50%)',
            opacity: Math.max(0.3, 1 - (index * 0.15)) // Fade out as they get further
          }}
        >
          💖
        </div>
      ))}

      {/* Background hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-love-soft text-2xl animate-pulse-love opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            💕
          </div>
        ))}
      </div>
    </div>
  );
};
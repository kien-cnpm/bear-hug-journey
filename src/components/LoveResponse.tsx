import { useEffect, useState } from "react";

export const LoveResponse = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-heart flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Celebration hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white animate-bounce-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 15}px`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          >
            {['❤️', '💖', '💕', '💗', '💓', '💝'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Main message */}
      <div className={`text-center z-10 max-w-2xl mx-auto transition-all duration-1000 ${
        showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="text-8xl mb-8 animate-bounce-heart">💖</div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse-love">
          Anh cũng yêu em! 💕
        </h1>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-float">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            Nào, vào tàu anh sẽ mua chả lụa và nem 
            <br />
            <span className="text-3xl">🚂</span>
            <br />
            cùng em ăn nhé! 
            <span className="text-2xl">🥟🍜</span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 text-4xl animate-bounce-heart">
          <span>🥰</span>
          <span>💏</span>
          <span>🥰</span>
        </div>
        
        <p className="text-white/90 mt-8 text-lg animate-pulse-love">
          Yêu em nhiều lắm! 💗
        </p>
      </div>

      {/* Floating food emojis */}
      <div className="absolute bottom-10 left-10 text-4xl animate-float">🚂</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-float" style={{ animationDelay: '1s' }}>🥟</div>
      <div className="absolute top-20 left-20 text-3xl animate-float" style={{ animationDelay: '2s' }}>🍜</div>
      <div className="absolute top-10 right-20 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>💕</div>
    </div>
  );
};
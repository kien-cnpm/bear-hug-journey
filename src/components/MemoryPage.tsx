import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface MemoryPageProps {
  onContinue: () => void;
}

export const MemoryPage = ({ onContinue }: MemoryPageProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-love-pink/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 15 + 10}px`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-love-pink mb-4 animate-pulse-love">
            Kỷ Niệm Của Chúng Ta 💖
          </h1>
          <p className="text-xl text-love-pink/80">
            Từ ngày đầu đến bây giờ...
          </p>
        </div>

        {/* Memory Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* First Meeting Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-love-pink mb-2">
                Ngày Đầu Gặp Nhau 🌸
              </h3>
              <p className="text-love-pink/70 text-sm mb-4">
                Khoảnh khắc đặc biệt...
              </p>
            </div>
            
            {/* Placeholder for first photo */}
            <div className="w-full h-64 bg-gradient-love rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm opacity-80">
                  Thêm ảnh ngày đầu gặp nhau tại đây
                </p>
              </div>
            </div>
            
            <div className="text-love-pink/80 text-sm italic">
              "Lần đầu tiên anh nhìn thấy em..."
            </div>
          </div>

          {/* Current Photo Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-love-pink mb-2">
                Hiện Tại 💕
              </h3>
              <p className="text-love-pink/70 text-sm mb-4">
                Tình yêu ngày càng đẹp hơn...
              </p>
            </div>
            
            {/* Placeholder for current photo */}
            <div className="w-full h-64 bg-gradient-heart rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm opacity-80">
                  Thêm ảnh hiện tại tại đây
                </p>
              </div>
            </div>
            
            <div className="text-love-pink/80 text-sm italic">
              "Và bây giờ anh yêu em hơn bao giờ hết"
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-4 text-love-pink">
            <div className="text-center">
              <div className="text-2xl mb-1">🌸</div>
              <div className="text-sm font-medium">Gặp nhau</div>
            </div>
            
            <div className="flex-1 h-0.5 bg-gradient-love"></div>
            
            <div className="text-center">
              <div className="text-2xl mb-1">💕</div>
              <div className="text-sm font-medium">Yêu nhau</div>
            </div>
            
            <div className="flex-1 h-0.5 bg-gradient-love"></div>
            
            <div className="text-center">
              <div className="text-2xl mb-1">💖</div>
              <div className="text-sm font-medium">Hiện tại</div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Button
          onClick={onContinue}
          size="lg"
          className="px-12 py-4 text-xl font-bold bg-love-pink hover:bg-love-pink/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          Tiếp tục câu chuyện... 💝
        </Button>

        {/* Photo upload instructions */}
        <div className="mt-8 text-love-pink/60 text-sm">
          <p>💡 Tip: Bạn có thể thay thế ảnh placeholder bằng ảnh thật của mình trong code!</p>
        </div>
      </div>
    </div>
  );
};
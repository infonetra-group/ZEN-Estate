import React, { useEffect, useRef, useState } from 'react';

interface StackedCard {
  heading: string;
  subtext: string;
}

interface StackedCardsProps {
  stackedCards: StackedCard[];
}

const StackedCards: React.FC<StackedCardsProps> = ({ stackedCards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress through the section
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
      
      // Calculate which card should be active
      const cardIndex = Math.floor(scrollProgress * stackedCards.length);
      const clampedIndex = Math.max(0, Math.min(stackedCards.length - 1, cardIndex));
      
      setCurrentCardIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stackedCards.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-50"
      style={{ height: `${100 + (stackedCards.length - 1) * 25}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full items-center">
            {stackedCards.map((card, index) => {
              const isVisible = index <= currentCardIndex;
              const delay = index * 0.2;
              
              // Calculate position based on scroll progress
              const baseTranslateY = isVisible ? 0 : 100;
              const baseOpacity = isVisible ? 1 : 0;
              const baseScale = isVisible ? 1 : 0.8;
              
              // Add staggered animation effect
              const adjustedProgress = Math.max(0, (currentCardIndex - index + 1));
              const finalTranslateY = baseTranslateY - (adjustedProgress * 20);
              
              return (
                <div
                  key={index}
                  className="transition-all duration-700 ease-out"
                  style={{
                    transform: `translateY(${finalTranslateY}px) scale(${baseScale})`,
                    opacity: baseOpacity,
                    transitionDelay: `${delay}s`,
                  }}
                >
                  <div className="bg-white rounded-3xl p-6 shadow-2xl h-80 flex flex-col justify-center">
                    <div
                      className="w-full h-full rounded-2xl p-8 flex flex-col justify-center text-white shadow-inner"
                      style={{
                        background: `linear-gradient(135deg, 
                          hsl(${(index * 60) % 360}, 70%, 50%) 0%, 
                          hsl(${(index * 60 + 60) % 360}, 70%, 40%) 100%)`
                      }}
                    >
                      <h3 className="text-2xl font-bold mb-4 text-center">{card.heading}</h3>
                      <p className="text-sm leading-relaxed opacity-90 text-center">{card.subtext}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {stackedCards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentCardIndex ? 'bg-[#800020]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackedCards;
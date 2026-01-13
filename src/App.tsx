import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { userData } from './data';
import Slide1Miles from './components/Slide1Miles';
import Slide2Hours from './components/Slide2Hours';
import Slide3Route from './components/Slide3Route';
import Slide4Comfort from './components/Slide4Comfort';
import Slide5WrapUp from './components/Slide5WrapUp';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const slides = [
    <Slide1Miles data={userData} />,
    <Slide2Hours data={userData} />,
    <Slide3Route data={userData} />,
    <Slide4Comfort data={userData} />,
    <Slide5WrapUp data={userData} />,
  ];

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleDragEnd = (_e: any, info: any) => {
    if (info.offset.x < -100 && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (info.offset.x > 100 && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#002244]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="h-full w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-2 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-[#419bf9]' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      {currentSlide < totalSlides - 1 && (
        <button
          onClick={nextSlide}
          className="fixed bottom-20 right-8 bg-[#419bf9] text-white p-4 rounded-full shadow-lg hover:bg-[#005DAA] transition-all z-50"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}

export default App;

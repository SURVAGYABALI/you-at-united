import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface Slide2Props {
  data: {
    minutesFlown: number;
    minutesPercentile: number;
  };
}

export default function Slide2Hours({ data }: Slide2Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = data.minutesFlown / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= data.minutesFlown) {
        setCount(data.minutesFlown);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [data.minutesFlown]);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-[#001B33] overflow-hidden px-6">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(to bottom, #001B33, #002244)',
            'linear-gradient(to bottom, #FF6B35, #F7931E)',
            'linear-gradient(to bottom, #87CEEB, #419bf9)',
            'linear-gradient(to bottom, #001B33, #002244)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <Clock size={48} className="text-[#EAA900]" />
        </motion.div>

        <motion.h1
          className="text-white font-bold text-6xl md:text-8xl mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        >
          {count}
        </motion.h1>

        <motion.p
          className="text-white text-3xl md:text-4xl font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          minutes in the sky
        </motion.p>

        {data.minutesPercentile && (
          <motion.p
            className="text-white text-lg md:text-xl font-medium mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
          >
            you were in the top <span className="text-[#EAA900] font-bold">{data.minutesPercentile}%</span> of all flyers
          </motion.p>
        )}


      </motion.div>
    </div>
  );
}

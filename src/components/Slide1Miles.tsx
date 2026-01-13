import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { Plane } from 'lucide-react';

interface Slide1Props {
  data: {
    totalMiles: number;
    timesAroundEarth: number;
  };
}

export default function Slide1Miles({ data }: Slide1Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = data.totalMiles / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= data.totalMiles) {
        setCount(data.totalMiles);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [data.totalMiles]);

  // const planes = useMemo(() => {
  //   return Array.from({ length: 20 }).map((_, i) => ({
  //     id: i,
  //     x: Math.random() * 100 + '%',
  //     duration: Math.random() * 3 + 4,
  //     delay: Math.random() * 2,
  //   }));
  // }, []);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#002244] to-[#005DAA] overflow-hidden px-6">
      {/* <div className="absolute inset-0 opacity-10">
        {planes.map((plane) => (
          <motion.div
            key={plane.id}
            className="absolute"
            initial={{ x: plane.x, y: '100%', opacity: 0 }}
            animate={{
              y: '-20%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: plane.duration,
              repeat: Infinity,
              delay: plane.delay,
            }}
          >
            <Plane size={24} className="text-white" />
          </motion.div>
        ))}
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="w-full flex justify-center">
          <motion.img
            src="images/image.png"
            alt="United Logo"
            className="w-28 mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <motion.p
          className="text-white font-gotham text-3xl md:text-8xl mb-4 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          HI <b>RAJAT KATIYAR!</b>
        </motion.p>
        <motion.p
          className="text-[#EAA900] font-semibold text-lg mb-4 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          YOUR 2025 JOURNEY
        </motion.p>

        <motion.h1
          className="text-white font-bold text-6xl md:text-8xl mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        >
          {count.toLocaleString()}
        </motion.h1>

        <motion.p
          className="text-white text-3xl md:text-4xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          miles flown
        </motion.p>

        <motion.div
          className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-[#E6E6E6] text-lg">
            That's{' '}
            <span className="text-[#419bf9] font-bold text-xl">
              {data.timesAroundEarth}x
            </span>{' '}
            around the Earth
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Share2, Globe2, Sparkles } from 'lucide-react';

interface Slide5Props {
  data: {
    travelPersona: string;
    personaDescription: string;
    totalMiles: number;
    minutesFlown: number;
  };
}

export default function Slide5WrapUp({ data }: Slide5Props) {
  const handleShare = () => {
    alert('Share functionality would be implemented here!');
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#002244] via-[#001B33] to-[#000000] overflow-hidden px-6">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles
              size={Math.random() * 20 + 10}
              className="text-[#419bf9]"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        className="relative z-10 max-w-md w-full"
      >
        <motion.div
          className="bg-gradient-to-br from-[#005DAA] to-[#002244] rounded-3xl p-8 shadow-2xl border-2 border-[#419bf9]/30"
          animate={{
            boxShadow: [
              '0 0 40px rgba(65, 155, 249, 0.3)',
              '0 0 60px rgba(65, 155, 249, 0.5)',
              '0 0 40px rgba(65, 155, 249, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
            <div className="bg-[#EAA900] p-4 rounded-full">
              <Globe2 size={48} className="text-white" />
            </div>
          </motion.div>

          <motion.p
            className="text-[#EAA900] text-sm font-semibold text-center mb-3 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            YOUR 2025 TRAVEL PERSONA
          </motion.p>

          <motion.h1
            className="text-white font-bold text-4xl text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {data.travelPersona}
          </motion.h1>

          <motion.p
            className="text-[#E6E6E6] text-center text-lg mb-8 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            "{data.personaDescription}"
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-[#419bf9] text-3xl font-bold mb-1">
                {data.totalMiles.toLocaleString()}
              </p>
              <p className="text-[#E6E6E6] text-xs">Miles</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-[#419bf9] text-3xl font-bold mb-1">
                {data.minutesFlown / 60}
              </p>
              <p className="text-[#E6E6E6] text-xs">Hours</p>
            </div>
          </motion.div>

          <motion.div
            className="text-center text-[#E6E6E6] text-xs mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            United Airlines • Year in Travel 2025
          </motion.div>
        </motion.div>

        <motion.button
          onClick={handleShare}
          className="w-full mt-6 bg-[#EAA900] hover:bg-[#cc9500] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 size={24} />
          Share This Moment
        </motion.button>
      </motion.div>
    </div>
  );
}

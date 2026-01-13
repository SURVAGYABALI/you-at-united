import { motion } from 'framer-motion';
import { Armchair, Award } from 'lucide-react';

interface Slide4Props {
  data: {
    seatPreference: string;
    cabinClass: string;
    upgradeStatus: string;
  };
}

export default function Slide4Comfort({ data }: Slide4Props) {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#001B33] to-[#002244] overflow-hidden px-6">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #419bf9 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, #419bf9 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, #419bf9 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, #419bf9 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.p
          className="text-[#EAA900] font-semibold text-lg mb-8 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          YOUR COMFORT ZONE
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-[#419bf9] to-[#005DAA] rounded-3xl shadow-2xl">
            <Armchair size={80} className="text-white" />
          </div>
        </motion.div>

        <motion.h2
          className="text-white font-bold text-4xl md:text-5xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {data.seatPreference} Seat
        </motion.h2>

        <motion.p
          className="text-[#E6E6E6] text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Enthusiast
        </motion.p>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-[#419bf9] text-sm font-semibold mb-2">
              CABIN CLASS
            </p>
            <p className="text-white text-2xl font-bold">{data.cabinClass}</p>
          </div>

          <motion.div
            className="bg-gradient-to-r from-[#EAA900]/20 to-[#EAA900]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#EAA900]/30"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.6,
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Award size={24} className="text-[#EAA900]" />
              <p className="text-[#EAA900] text-sm font-semibold">
                UPGRADE STATUS
              </p>
            </div>
            <p className="text-white text-2xl font-bold">
              {data.upgradeStatus}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

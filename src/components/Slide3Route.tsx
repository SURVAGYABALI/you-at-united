import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface Slide3Props {
  data: {
    topRoute: {
      origin: string;
      originCity: string;
      destination: string;
      destinationCity: string;
      trips: number;
    };
    citiesVisited: string[];
  };
}

export default function Slide3Route({ data }: Slide3Props) {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#002244] via-[#003366] to-[#005DAA] overflow-hidden px-6">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center z-10 w-full max-w-md"
      >
        <motion.p
          className="text-[#EAA900] font-semibold text-lg mb-6 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          YOUR GO-TO ROUTE
        </motion.p>

        <div className="relative my-16">
          <div className="flex justify-between items-start">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
            >
              <div className="bg-[#419bf9] p-4 rounded-full mb-3">
                <MapPin size={32} className="text-white" />
              </div>
              <div className="text-white font-bold text-3xl mb-1">
                {data.topRoute.origin}
              </div>
              <div className="text-[#E6E6E6] text-sm">
                {data.topRoute.originCity}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
            >
              <div className="bg-[#EAA900] p-4 rounded-full mb-3">
                <MapPin size={32} className="text-white" />
              </div>
              <div className="text-white font-bold text-3xl mb-1">
                {data.topRoute.destination}
              </div>
              <div className="text-[#E6E6E6] text-sm">
                {data.topRoute.destinationCity}
              </div>
            </motion.div>
          </div>

          <svg
            className="absolute top-12 left-0 w-full h-20"
            style={{ zIndex: -1 }}
          >
            <motion.path
              d="M 60 40 Q 200 10, 340 40"
              stroke="#419bf9"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.circle
              r="6"
              fill="#EAA900"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{
                delay: 1.1,
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="1.1s">
                <mpath href="#route-path" />
              </animateMotion>
            </motion.circle>
            <path
              id="route-path"
              d="M 60 40 Q 200 10, 340 40"
              fill="none"
            />
          </svg>
        </div>

        <motion.div
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-[#E6E6E6] text-lg">
            You flew this route{' '}
            <span className="text-[#419bf9] font-bold text-2xl">
              {data.topRoute.trips}
            </span>{' '}
            times
          </p>
        </motion.div>

        <motion.div
          className="mt-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p className="text-[#419bf9] text-sm font-semibold tracking-wider mb-4">
            CITIES EXPLORED
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {data.citiesVisited.map((city, i) => (
              <motion.div
                key={city}
                className="text-[#E6E6E6] text-lg bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0 + i * 0.1 }}
              >
                {city}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

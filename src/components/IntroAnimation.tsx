import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 400);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"
          />

          <motion.div
            initial={{ x: -200, y: 100, opacity: 0, rotate: -15 }}
            animate={{
              x: [null, 100, 400, 600],
              y: [null, 80, 60, 40],
              opacity: [0, 1, 1, 0],
              rotate: [-15, -5, 0, 5]
            }}
            transition={{
              duration: 2.8,
              times: [0, 0.3, 0.7, 1],
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-0"
          >
            <Ship className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400" strokeWidth={1.5} />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              transition={{
                duration: 2.8,
                times: [0, 0.3, 0.7, 1]
              }}
              className="absolute -bottom-2 left-0 h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent origin-left"
            />
          </motion.div>

          <motion.div
            initial={{ x: 400, y: -150, opacity: 0, rotate: 135 }}
            animate={{
              x: [null, 100, -200, -500],
              y: [null, -80, 20, 120],
              opacity: [0, 1, 1, 0],
              rotate: [135, 140, 145, 150]
            }}
            transition={{
              duration: 3,
              times: [0, 0.25, 0.7, 1],
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-0"
          >
            <Plane className="w-14 h-14 sm:w-20 sm:h-20 text-blue-400" strokeWidth={1.5} />
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"
            />
          </motion.div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.5],
                opacity: [0, 0.6, 0],
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 150],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 150]
              }}
              transition={{
                duration: 2,
                delay: 0.8 + i * 0.1,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-amber-400 rounded-full"
            />
          ))}

          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{
              scale: [0.5, 1.1, 1],
              opacity: [0, 1, 1],
              rotate: [-10, 5, 0]
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              times: [0, 0.6, 1],
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(251, 191, 36, 0.3)",
                  "0 0 60px rgba(251, 191, 36, 0.5)",
                  "0 0 30px rgba(251, 191, 36, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="rounded-full"
            >
              <img
                src="/logo_2.0.svg"
                alt="Amir & Co Logistics"
                className="w-40 h-40 sm:w-56 sm:h-56 object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent origin-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
              transition={{
                duration: 3,
                delay: 1.3,
                times: [0, 0.3, 0.8, 1]
              }}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="text-amber-400 text-lg sm:text-xl font-light tracking-[0.3em]">
                LOGISTICS
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

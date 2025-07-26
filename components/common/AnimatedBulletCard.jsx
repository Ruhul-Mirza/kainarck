// AnimatedBulletCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Assuming cn utility is available
import { useTheme } from '../../context/ThemeContext'; // Assuming ThemeContext is available

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const AnimatedBulletCard = ({ title, items, className }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={cn(
        "relative w-96 h-80 rounded-2xl overflow-hidden p-6 flex flex-col justify-center",
        theme === 'dark'
          ? "bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl border-purple-500/30 shadow-2xl shadow-purple-500/25 text-white"
          : "bg-gradient-to-br from-white/90 to-gray-50/95 backdrop-blur-xl border-purple-300/40 shadow-2xl shadow-purple-500/20 text-gray-900",
        className
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <h3
        className={cn(
          "text-2xl font-bold mb-4",
          theme === 'dark' ? "text-purple-300" : "text-purple-700"
        )}
      >
        {title}
      </h3>
      <motion.ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className={cn(
              "text-base",
              theme === 'dark' ? "text-gray-300" : "text-gray-700"
            )}
            variants={listItemVariants}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
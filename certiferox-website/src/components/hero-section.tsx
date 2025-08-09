'use client';

import { useTranslation } from '@/i18n/client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedBackground from './animated-background';

const HeroSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'common');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="hero" className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <motion.div
        className="relative z-20 text-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-semibold text-accent mb-4 font-sans tracking-widest">
          {t('hero.superTitle')}
        </motion.h2>
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-6">
          <Image src="/assets/logo-icon.svg" alt="CertiFerox Icon" width={60} height={60} />
          <h1 className="text-4xl md:text-7xl font-bold font-orbitron tracking-tighter">
            {t('hero.title')}
          </h1>
        </motion.div>
        <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 font-sans">
          {t('hero.subTitle')}
        </motion.p>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-accent rounded-full"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

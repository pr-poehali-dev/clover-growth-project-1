import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);

  const { t } = useLang();

  return (
    <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/4747310d-9019-4a6e-9b4d-8ce629c45b36/files/2bd4d6eb-3ce2-443d-8963-1e9e525eb106.jpg"
          alt="VOLTA Espresso"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs tracking-[0.5em] uppercase mb-6 opacity-70 font-light">
          Since 1987 · Milano
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-bold tracking-tight leading-none mb-8">
          {t.hero.tagline}
        </h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed mb-10 font-light">
          {t.hero.subtitle}
        </p>
        <Link
          to="/catalog"
          className="inline-block border border-white text-white uppercase text-xs tracking-widest px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          {t.hero.cta}
        </Link>
      </div>
    </div>
  );
}
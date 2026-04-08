import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n/LangContext';

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);
  const { t } = useLang();

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/4747310d-9019-4a6e-9b4d-8ce629c45b36/files/1cd0e7ff-0f05-4f3d-b009-8347c04d3b39.jpg"
            alt="VOLTA espresso art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-xs tracking-[0.4em] opacity-70">
        {t.promo.label}
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl z-10 font-light leading-tight">
        {t.promo.text}
      </p>
    </div>
  );
}
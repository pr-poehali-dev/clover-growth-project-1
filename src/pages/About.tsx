import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/i18n/LangContext';

export default function About() {
  const { t } = useLang();
  const stats = t.about.stats as Array<{ value: string; label: string }>;
  const values = t.about.values as Array<{ title: string; desc: string }>;

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-neutral-950 overflow-hidden">
        <Header dark={false} />
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-6">VOLTA Espresso</p>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-none mb-8">
              {t.about.title}
            </h1>
            <p className="text-neutral-400 text-xl font-light max-w-xl">{t.about.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="text-neutral-600 text-xl leading-relaxed font-light">{t.about.story}</p>
          </div>
          <div className="aspect-video bg-neutral-100 overflow-hidden">
            <img src="/images/exterior.png" alt="VOLTA factory" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-t border-b border-neutral-100 py-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-3">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-px bg-neutral-900 mb-8" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 tracking-wide">{v.title}</h3>
              <p className="text-neutral-500 leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-950 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Milano · Zürich · Tokyo</h2>
            <p className="text-neutral-400 mt-4 text-lg font-light">Our studios around the world</p>
          </div>
          <img src="/images/desk.png" alt="VOLTA studio" className="w-full max-w-sm aspect-square object-cover" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

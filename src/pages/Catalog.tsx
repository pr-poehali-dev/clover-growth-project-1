import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/i18n/LangContext';

export default function Catalog() {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = ['all', 'espresso', 'capsule', 'professional'];

  const products = t.catalog.products as Array<{
    id: number; name: string; category: string; price: string; desc: string;
  }>;

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  const filterLabels: Record<string, string> = {
    all: t.catalog.filters.all,
    espresso: t.catalog.filters.espresso,
    capsule: t.catalog.filters.capsule,
    professional: t.catalog.filters.professional,
  };

  const images: Record<number, string> = {
    1: '/images/ai-coder.png',
    2: '/images/ai-collaboration.png',
    3: '/images/ai-researcher.png',
    4: '/images/ai-startup.png',
    5: '/images/ai-startup1.png',
    6: '/images/desk.png',
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="relative bg-neutral-950 pb-24 pt-32">
        <Header dark={false} />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">VOLTA Espresso</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{t.catalog.title}</h1>
          <p className="text-neutral-400 mt-4 text-lg font-light">{t.catalog.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 text-xs uppercase tracking-widest border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-neutral-950 text-white border-neutral-950'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-950'
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <Link to={`/catalog/${product.id}`}>
                <div className="aspect-square bg-neutral-100 overflow-hidden mb-4">
                  <img
                    src={images[product.id] ?? '/images/desk.png'}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-neutral-900 tracking-wide">{product.name}</h3>
                    <p className="text-sm text-neutral-500 mt-1 leading-relaxed line-clamp-2">{product.desc}</p>
                  </div>
                  <span className="text-neutral-900 font-semibold ml-4 whitespace-nowrap">{product.price}</span>
                </div>
                <button className="mt-4 text-xs uppercase tracking-widest text-neutral-900 border-b border-neutral-900 pb-0.5 hover:opacity-50 transition-opacity">
                  {t.catalog.buy}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

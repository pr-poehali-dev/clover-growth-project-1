import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/i18n/LangContext';

const productImages: Record<string, string> = {
  '1': '/images/ai-coder.png',
  '2': '/images/ai-collaboration.png',
  '3': '/images/ai-researcher.png',
  '4': '/images/ai-startup.png',
  '5': '/images/ai-startup1.png',
  '6': '/images/desk.png',
};

const specsData: Record<string, Record<string, string>> = {
  '1': { pressure: '15 bar', boiler: 'E61 Thermoblock', weight: '8.5 kg', warranty: '3 года' },
  '2': { pressure: '15 bar', boiler: 'Двойной, 2.5 л', weight: '12 kg', warranty: '5 лет' },
  '3': { pressure: '19 bar', boiler: 'Thermoblock', weight: '3.2 kg', warranty: '2 года' },
  '4': { pressure: '19 bar', boiler: 'Thermoblock Pro', weight: '4.1 kg', warranty: '3 года' },
  '5': { pressure: '15 bar', boiler: '7 л', weight: '28 kg', warranty: '5 лет' },
  '6': { pressure: '15 bar', boiler: 'Двойной 2×7 л', weight: '52 kg', warranty: '5 лет' },
};

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLang();

  const products = t.catalog.products as Array<{
    id: number; name: string; category: string; price: string; desc: string;
  }>;

  const product = products.find((p) => String(p.id) === id);
  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const specs = specsData[id ?? '1'];
  const img = productImages[id ?? '1'];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-neutral-950 pt-24 pb-8">
        <Header dark={false} />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          to="/catalog"
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors mb-12 inline-block"
        >
          {t.product.back}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-neutral-100 overflow-hidden"
          >
            <img src={img} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 mb-4">VOLTA Espresso</p>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-light text-neutral-900 mb-6">{product.price}</p>
            <p className="text-neutral-600 leading-relaxed mb-10 text-lg font-light">{product.desc}</p>

            <button className="bg-neutral-950 text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors w-fit mb-12">
              {t.product.buy}
            </button>

            <div className="border-t border-neutral-100 pt-8">
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">{t.product.specs}</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: t.product.pressure, val: specs.pressure },
                  { label: t.product.boiler, val: specs.boiler },
                  { label: t.product.weight, val: specs.weight },
                  { label: t.product.warranty, val: specs.warranty },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{s.label}</p>
                    <p className="text-neutral-900 font-medium">{s.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

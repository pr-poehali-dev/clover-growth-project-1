import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLang } from '@/i18n/LangContext';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const { t } = useLang();
  const f = t.contacts.form;
  const info = t.contacts.info;

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-neutral-950">
        <Header dark={false} />
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-6">VOLTA Espresso</p>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-none">{t.contacts.title}</h1>
            <p className="text-neutral-400 mt-6 text-xl font-light max-w-lg">{t.contacts.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-950 text-white p-12 text-center"
              >
                <Icon name="CheckCircle" size={48} className="mx-auto mb-6 text-white" />
                <p className="text-lg font-light">{f.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {(['name', 'email', 'phone'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">{f[field]}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full border-b border-neutral-200 py-3 text-neutral-900 outline-none focus:border-neutral-900 transition-colors bg-transparent"
                      required={field !== 'phone'}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">{f.message}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full border-b border-neutral-200 py-3 text-neutral-900 outline-none focus:border-neutral-900 transition-colors bg-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-neutral-950 text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors w-fit mt-4"
                >
                  {f.send}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-10 lg:pl-12 lg:border-l border-neutral-100">
            {[
              { icon: 'MapPin', label: info.address },
              { icon: 'Phone', label: info.phone },
              { icon: 'Mail', label: info.email },
              { icon: 'Clock', label: info.hours },
            ].map((item) => (
              <div key={item.icon} className="flex items-start gap-5">
                <Icon name={item.icon} size={20} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                <p className="text-neutral-700 font-light leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

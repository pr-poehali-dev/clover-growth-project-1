import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';

export default function Featured() {
  const { t } = useLang();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4747310d-9019-4a6e-9b4d-8ce629c45b36/files/6849afb8-e368-4b8c-86e9-1b129f5852f1.jpg"
          alt="VOLTA coffee machine"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1 lg:max-w-xl">
        <p className="uppercase mb-6 text-xs tracking-[0.3em] text-neutral-400 font-medium">
          {t.featured.label}
        </p>
        <h2 className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-light">
          {t.featured.title}
        </h2>
        <Link
          to="/catalog"
          className="bg-black text-white border border-black px-8 py-3 text-xs transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest"
        >
          {t.featured.cta}
        </Link>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-950 py-4 sm:py-6 lg:py-8 px-6 lg:px-12 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-12 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">{t.footer.catalog}</h3>
                <Link to="/catalog" className="text-white hover:text-neutral-400 transition-colors text-sm">{t.footer.links.all}</Link>
                <Link to="/catalog" className="text-white hover:text-neutral-400 transition-colors text-sm">{t.footer.links.espresso}</Link>
                <Link to="/catalog" className="text-white hover:text-neutral-400 transition-colors text-sm">{t.footer.links.capsule}</Link>
                <Link to="/catalog" className="text-white hover:text-neutral-400 transition-colors text-sm">{t.footer.links.professional}</Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">{t.footer.company}</h3>
                <Link to="/about" className="text-white hover:text-neutral-400 transition-colors text-sm">{t.footer.companyLinks.about}</Link>
                <Link to="/contacts" className="text-white hover:text-neutral-400 transition-colors text-sm">{t.footer.companyLinks.contacts}</Link>
                <span className="text-white/40 text-sm">{t.footer.companyLinks.press}</span>
                <span className="text-white/40 text-sm">{t.footer.companyLinks.careers}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                VOLTA
              </h1>
              <p className="text-white/40 text-xs tracking-widest uppercase">{t.footer.copy}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

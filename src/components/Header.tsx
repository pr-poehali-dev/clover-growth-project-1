import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/i18n/LangContext';
import { Lang } from '@/i18n/translations';
import Icon from '@/components/ui/icon';

const LANGS: Lang[] = ['ru', 'en', 'de', 'fr', 'es'];

interface HeaderProps {
  className?: string;
  dark?: boolean;
}

export default function Header({ className, dark = false }: HeaderProps) {
  const { t, lang, setLang } = useLang();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const textColor = dark ? 'text-neutral-900' : 'text-white';
  const borderColor = dark ? 'border-neutral-200' : 'border-white/20';
  const hoverColor = dark ? 'hover:text-neutral-500' : 'hover:text-neutral-300';
  const bgMenu = dark ? 'bg-white border border-neutral-200' : 'bg-black/80 backdrop-blur-md';

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/catalog', label: t.nav.catalog },
    { href: '/about', label: t.nav.about },
    { href: '/contacts', label: t.nav.contacts },
  ];

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 px-6 py-5 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className={`${textColor} text-xl font-bold tracking-[0.2em] uppercase`}>
          VOLTA
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`${textColor} ${hoverColor} transition-colors duration-300 uppercase text-xs tracking-widest font-medium ${location.pathname === l.href ? 'opacity-50' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`uppercase text-xs tracking-widest transition-all duration-200 ${
                lang === l
                  ? `${textColor} font-bold`
                  : `${textColor} opacity-40 ${hoverColor}`
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className={`md:hidden mt-4 rounded-lg p-6 ${bgMenu}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 uppercase text-xs tracking-widest font-medium ${dark ? 'text-neutral-900' : 'text-white'} ${hoverColor} transition-colors`}
            >
              {l.label}
            </Link>
          ))}
          <div className={`flex gap-3 mt-4 pt-4 border-t ${borderColor}`}>
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false); }}
                className={`uppercase text-xs tracking-widest ${
                  lang === l
                    ? `${dark ? 'text-neutral-900' : 'text-white'} font-bold`
                    : `${dark ? 'text-neutral-900' : 'text-white'} opacity-40`
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/client';
import { languages } from '@/i18n/settings';
import { usePathname } from 'next/navigation';

export const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'common');
  const pathname = usePathname();

  const getLanguageSwitchLink = (targetLng: string) => {
    if (!pathname) return '/';
    const newPath = pathname.replace(`/${lng}`, `/${targetLng}`);
    return newPath;
  };

  const otherLang = languages.find((l) => l !== lng) || 'en';

  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={`/${lng}`} className="flex items-center">
          <Image
            src="/assets/logo-full.svg"
            alt="CertiFerox Logo"
            width={180}
            height={40}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 font-semibold">
          <Link href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</Link>
          <Link href="#products" className="hover:text-accent transition-colors">{t('nav.products')}</Link>
          <Link href="#team" className="hover:text-accent transition-colors">{t('nav.team')}</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">{t('nav.contact')}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={getLanguageSwitchLink(otherLang)}>
            <div className="border border-white/50 rounded-full px-4 py-1 text-sm uppercase hover:bg-white hover:text-black transition-colors">
              {otherLang}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

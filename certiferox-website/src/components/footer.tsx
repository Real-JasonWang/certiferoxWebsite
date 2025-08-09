'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n/client';

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'common');

  return (
    <footer id="contact" className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center mb-6">
           <Image
            src="/assets/logo-text.svg"
            alt="CertiFerox Text Logo"
            width={150}
            height={35}
          />
        </div>
        <p className="mb-4">{t('footer.cta')}</p>
        <a href={`mailto:${t('footer.email')}`} className="hover:text-accent transition-colors">
          {t('footer.email')}
        </a>
        <p className="text-xs mt-8">
          {t('footer.copyright')}
        </p>
        <div className="mt-4 text-xs text-gray-500 space-x-4">
          {t('footer.tags', { returnObjects: true }).map((tag: string) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

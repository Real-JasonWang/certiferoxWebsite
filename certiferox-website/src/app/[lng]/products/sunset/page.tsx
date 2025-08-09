import { useTranslation } from '@/i18n';
import Link from 'next/link';

export default async function SunsetPage({ params: { lng } }: { params: { lng: string }}) {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className="pt-24 bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Link href={`/${lng}#products`} className="text-accent hover:underline mb-8 inline-block">&larr; {t('products.title')}</Link>
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-accent mb-4">
          {t('products.sunset_lab.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
          {t('products.sunset_lab.description')}
        </p>
         <div className="mt-8">
            <span className="text-sm font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {t(`products.sunset_lab.model`)}
            </span>
        </div>
      </div>
    </div>
  );
}

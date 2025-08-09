import { useTranslation } from '@/i18n';
import { AnimateOnScroll } from './animate-on-scroll';

const CultureSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <AnimateOnScroll className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold font-sans text-gray-400 mb-4">
          {t('culture.title')}
        </h2>
        <p className="text-4xl md:text-6xl font-bold font-orbitron text-white">
          {t('culture.content')}
        </p>
      </AnimateOnScroll>
    </section>
  );
};

export default CultureSection;

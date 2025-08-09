import { useTranslation } from '@/i18n';
import { AnimateOnScroll } from './animate-on-scroll';

const SunfindSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <section id="sunfind" className="py-20 md:py-32 bg-gray-900">
      <AnimateOnScroll className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-accent">
          {t('sunfind.title')}
        </h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          {t('sunfind.content')}
        </p>
      </AnimateOnScroll>
    </section>
  );
};

export default SunfindSection;

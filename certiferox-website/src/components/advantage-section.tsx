import { useTranslation } from '@/i18n';
import { AnimateOnScroll } from './animate-on-scroll';

const AdvantageSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron">
            {t('advantage.title')}
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimateOnScroll className="bg-gray-800/50 p-8 rounded-lg border border-white/10" delay={0.2}>
            <h3 className="text-2xl font-bold font-orbitron text-accent mb-4">
              {t('advantage.advantageTitle')}
            </h3>
            <p className="text-gray-300">
              {t('advantage.advantageContent')}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll className="bg-gray-800/50 p-8 rounded-lg border border-white/10" delay={0.4}>
            <h3 className="text-2xl font-bold font-orbitron text-accent mb-4">
              {t('advantage.moatTitle')}
            </h3>
            <p className="text-gray-300">
              {t('advantage.moatContent')}
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;

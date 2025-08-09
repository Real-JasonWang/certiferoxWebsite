import { useTranslation } from '@/i18n';
import { AnimateOnScroll } from './animate-on-scroll';

const ProblemsSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <AnimateOnScroll className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4">
              {t('problems.title')}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="md:col-span-3" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('problems.content')}
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

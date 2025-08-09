import { useTranslation } from '@/i18n';
import Link from 'next/link';
import { AnimateOnScroll } from './animate-on-scroll';

const ProductsSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'common');
  const products = ['verisona', 'meowoj', 'sunset_lab'];

  return (
    <section id="products" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron">
            {t('products.title')}
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimateOnScroll
              key={product}
              className="bg-gray-900 border border-white/10 rounded-lg p-8 flex flex-col"
              delay={0.2 * (index + 1)}
            >
              <h3 className="text-2xl font-bold font-orbitron text-accent mb-4">
                {t(`products.${product}.title`)}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">
                {t(`products.${product}.description`)}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {t(`products.${product}.model`)}
                </span>
                <Link href={`/${lng}/products/${product.split('_')[0]}`}>
                  <div className="text-accent font-semibold hover:underline">
                    Learn More &rarr;
                  </div>
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

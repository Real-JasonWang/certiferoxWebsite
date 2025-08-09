import { useTranslation } from '@/i18n';
import { AnimateOnScroll } from './animate-on-scroll';

const TeamSection = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'common');
  const teamMembers = ['john', 'jason', 'yuxuan', 'biaolin', 'jinchang'];
  const roles = ['ceo', 'cpo', 'gm', 'cto', 'cao'];

  return (
    <section id="team" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron">
            {t('team.title')}
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll
              key={member}
              className="flex flex-col items-center"
              delay={0.1 * (index + 1)}
            >
              <div className="w-32 h-32 bg-gray-800 border-2 border-accent rounded-full mb-4">
                {/* Placeholder for photo */}
              </div>
              <h3 className="text-xl font-bold font-sans">
                {t(`team.members.${member}`)}
              </h3>
              <p className="text-gray-400 font-semibold uppercase">
                {t(`team.roles.${roles[index]}`)}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

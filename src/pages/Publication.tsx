import { ExperienceCard } from '../components/ExperienceCard';
import { experienceList } from '../data/Experience';
import { background, primaryText } from '../theme/Colors';

export const Experience = () => {
  return (
    <section
      className={`${background} text-center py-16 md:py-24`}
      id="experience"
    >
      <p className={`text-4xl font-semibold ${primaryText}`}>Experience</p>
      <div className="mt-8 md:mt-16 px-8 md:px-16">
        {experienceList.map((experience, index) => {
          return (
            <>
              <ExperienceCard
                key={index}
                time={experience.time}
                role={experience.role}
                organization={experience.organization}
                description={experience.description}
                url={''}
              />
              <div className="h-16"></div>
            </>
          );
        })}
      </div>
    </section>
  );
};

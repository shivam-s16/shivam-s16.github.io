import { EducationCard } from '../components/ExperienceCard';
import { educationList } from '../data/Education';
import { background, primaryText } from '../theme/Colors';

export const Education = () => {
  return (
    <section className={`text-center py-16 md:py-24`} id="education">
      <p className={`text-4xl font-semibold ${primaryText}`}>Education</p>
      <div className="mt-8 md:mt-16 px-8 md:px-16">
        {educationList.map((education, index) => {
          return (
            <>
              <EducationCard
                key={index}
                time={education.time}
                degree={education.degree}
                institution={education.institution}
                description={education.description}
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

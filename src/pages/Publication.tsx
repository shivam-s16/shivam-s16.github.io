import { PublicationCard } from '../components/ExperienceCard';
import { experienceList } from '../data/Experience';
import { PublicationList } from '../data/Publication';
import { background, primaryText } from '../theme/Colors';


export const Publication = () => {
  return (
    <section
      className={`${background} text-center py-16 md:py-24`}
      id="experience"
    >
      <p className={`text-4xl font-semibold ${primaryText}`}>Publications</p>
      <div className="mt-8 md:mt-16 px-8 md:px-16">
        {PublicationList.map((publication, index) => {
          return (
            <>
              <PublicationCard
                key={index}
                      time={publication.time}
                      title={publication.title}
                      subtitle={publication.subtitle}
                description={publication.description}
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

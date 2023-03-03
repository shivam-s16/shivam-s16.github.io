import { ProjectCard } from '../components/ProjectCard';
import { myProjects } from '../data/projects';
import { primaryText } from '../theme/Colors';

export const Projects = () => {
  return (
    <section className="text-center py-16 md:py-24" id="projects">
      <p className={`text-4xl font-semibold ${primaryText}`}>My Projects</p>
      <div className="flex flex-wrap gap-8 justify-center mt-8 md:mt-16">
        {myProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

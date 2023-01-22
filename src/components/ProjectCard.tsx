import { Project } from "../data/projects"
import { background, primaryVariant } from "../theme/Colors";

interface Props {
    project: Project
    className?: string
}

export const ProjectCard = ({ project, className }: Props) => {
    const { title, time, desc, image, projectUrl } = project;

    return (<div className={`w-80 md:w-96 rounded-lg ${background} border border-sky-50`}>
        <img className="rounded-t-lg h-48 w-80 md:w-96 object-cover " src={image} alt="project" />

        <div className="p-4">
            <h4 className="font-semibold">{time}</h4>
            <p className="mt-3">{desc}</p>
        </div>
        <a href={projectUrl} rel="noreferrer" target="_blank"> <button className={`px-4 py-2 ${primaryVariant} rounded-lg mb-4`}> Learn more</button></a>
    </div>)
}
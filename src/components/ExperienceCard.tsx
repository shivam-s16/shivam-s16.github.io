import { Education, isEducation } from "../data/Education"
import { Experience } from "../data/Experience"
import { background, primaryText, primaryVariant } from "../theme/Colors"

type CardProps = Education | Experience

interface Props {
    time: string,
    title: string,
    subtitle: string,
    description: string,
    url: string
    className?: string
}

const Card = ({ time, title, subtitle, description, url, className }: Props) => {
    return (
        <div className={`flex flex-col-reverse md:flex-row ${className} items-center justify-evenly rounded-lg py-8 px-8 md:px-0`}>
            <div className="md:w-1/5">
                <p className="text-xl mt-4 md:mt-0">{time}</p>
                <a href={url}><button className={`${primaryVariant} px-4 py-2 mt-8`}>Learn More</button></a>
            </div>
            <div className="md:h-24 md:w-1 md:rounded md:bg-sky-900"></div>
            <div className="md:text-left md:w-3/5">
                <p className={`${primaryText} text-2xl font-semibold md:text-3xl`}>{title}</p>
                <p className="mt-8 md:text-xl font-semibold">{subtitle}</p>
                <p className="mt-6 text-sm md:text-base">{description}</p>
            </div>
        </div>
    )
}


export const EducationCard = (education: Education) => {
    return <Card className={`${background}`} time={education.time} title={education.degree} subtitle={education.institution} description={education.description} url={education.url} />
}

export const ExperienceCard = (experience: Experience) => {
    return <Card className='bg-white' time={experience.time} title={experience.role} subtitle={experience.organization} description={experience.description} url={experience.url} />
}


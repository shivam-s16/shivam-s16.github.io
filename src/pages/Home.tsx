import dataScientist from '../assets/data_scientist.svg'
import { primaryText, primaryVariant, textColor } from '../theme/Colors'


export const Home = () => {
    return (
        <section id='home' className="flex flex-col-reverse md:flex-row md:justify-evenly items-center px-6">
            <div className='mb-16 md:my-24 text-center md:text-left md:w-2/6'>
                <p className={`text-3xl ${primaryText}`} >Hi👋, I’m a</p>
                <p className={`text-6xl ${primaryText}`}>Data Scientist</p>
                <p className={`text-xl mt-8 ${textColor}`}>I’m Shivam Saxena, a developer dedicated to making the world a better place one line of code at a time.</p>
                <button  className={`mt-6 px-4 py-2 rounded text-2xl ${primaryVariant}`}>Resume</button>
            </div>

            <div className="my-24 w-1/2 md:w-2/6">
                <img src={dataScientist} alt="" />
            </div>
        </section>
    )
}
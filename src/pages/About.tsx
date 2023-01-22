import me from '../assets/me.jpg'
import { background, primaryText } from '../theme/Colors'

export const About = () => {
    return (
        <section className={`py-16 flex flex-col md:flex-row md:justify-evenly items-center ${background}`} id="about">
            <div className='w-3/4 md:w-1/4'>
                <img className='rounded-full md:rounded-3xl' src={me} />

            </div>
            <div className='text-center md:text-left md:w-1/2'>
                <p className={`mt-8 md:mt-0 text-4xl font-semibold ${primaryText}`}>About me</p>
                <p className='mt-4 md:text-xl'>Build a custom color scheme to man dynamic color use as
                    fallback colors, or implement a branded theme. The color
                    system automatically handles critical adjustments that
                    provide accessible color contrast</p>
            </div>

        </section>
    )
}
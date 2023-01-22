import { background, primaryText } from "../theme/Colors"

export const Footer = () => {
    return (
        <section className={`${background} text-center py-16 md:py-24`} id="about">
            <p className={`text-4xl font-semibold ${primaryText}`}></p>

        </section>
    )
}
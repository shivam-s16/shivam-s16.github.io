import { background, primaryText } from '../theme/Colors';

export const About = () => {
  return (
    <section
      className={`py-16 flex flex-col md:flex-row md:justify-evenly items-center ${background}`}
      id="about"
    >
      <div className="w-3/4 md:w-1/4">
        <img className="rounded-full md:rounded-3xl" src="me.jpg" />
      </div>
      <div className="text-center md:text-left md:w-1/2">
        <p className={`mt-8 md:mt-0 text-4xl font-semibold ${primaryText}`}>
          About me
        </p>
        <p className="mt-4 md:text-xl">
          I am a passionate learner currently pursuing B.Tech in Data Science
          and Artificial Intelligence at IIIT Naya Raipur. My primary areas of
          interest include Data Science, Machine Learning and Deep Learning. I
          have gained experience in working with Computer Vision and NLP, and I
          possess excellent problem-solving abilities. Additionally, I have
          expertise in complex quantitative modeling for dynamic forecasting and
          time series analysis.
        </p>
      </div>
    </section>
  );
};

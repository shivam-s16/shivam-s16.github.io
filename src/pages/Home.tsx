import { primaryText, primaryVariant, textColor } from '../theme/Colors';

export const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row md:justify-evenly items-center px-6"
    >
      <div className="mb-16 md:my-24 text-center md:text-left md:w-2/6">
        <p className={`text-3xl ${primaryText}`}>Hi👋, I’m </p>
        <p className={`text-6xl ${primaryText}`}>Shivam Saxena</p>
        <p className={`text-xl mt-8 ${textColor}`}>
          I design and develop neural networks that can analyze vast amounts of
          data, recognize patterns, and make intelligent decisions.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1k6MY9Df-5ua6KJWr1n82K-a_yahlcvYi?usp=drive_link"
          target={`_blank`}
          rel="nonreferrer"
        >
          <button
            className={`mt-6 px-4 py-2 rounded text-2xl ${primaryVariant}`}
          >
            Resume
          </button>
        </a>
      </div>

      <div className="my-24 w-1/2 md:w-2/6">
        <img src="data_scientist.svg" alt="" />
      </div>
    </section>
  );
};

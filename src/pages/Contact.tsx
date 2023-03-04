import { background, primaryText } from '../theme/Colors';
import { SocialLinks } from '../components/SocialLinks';

export const Contact = () => {
  return (
    <section
      className={`${background} text-center py-16 md:py-24`}
      id="contact"
    >
      <p className={`text-4xl font-semibold ${primaryText}`}>Contact Me</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 mt-16">
        <div className="md:text-left">
          <p className={`text-2xl font-semibold`}>Shivam Saxena</p>
          <p>
            Ramanujan House, <br /> IIIT Naya Raipur Sector 24,
            <br /> Naya Raipur, Chhattisgarh 493661 INDIA
          </p>
        </div>
        <div className="md:text-left">
          <p className="font-semibold">Email:</p>
          <p>saxenashivam451@gmail.com</p>
          <p className=" font-semibold">Mobile:</p>
          <p>+91-6232703705</p>
        </div>
      </div>
      <SocialLinks className="mt-8" />
    </section>
  );
};

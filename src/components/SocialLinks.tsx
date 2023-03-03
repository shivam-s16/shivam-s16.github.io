import { BsMedium } from 'react-icons/bs';
import {
  FaGithub,
  FaInstagram,
  FaKaggle,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${
        className ? className : ''
      } flex items-center justify-center gap-4`}
    >
      <a
        className="hover:-translate-y-0.5 hover:text-blue-500 transition"
        href="https://www.linkedin.com/in/shivamsaxena1611/"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        className="hover:-translate-y-0.5 hover:text-blue-500 transition"
        href="https://twitter.com/ShivamS2816"
        rel="noreferrer"
        target="_blank"
      >
        <FaTwitter size={24} />
      </a>
      <a
        className="hover:-translate-y-0.5 hover:text-blue-500 transition"
        href="https://github.com/shivam-s16"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub size={24} />
      </a>
      <a
        className="hover:-translate-y-0.5 hover:text-blue-500 transition"
        href="https://www.kaggle.com/shiv28"
        rel="noreferrer"
        target="_blank"
      >
        <FaKaggle size={24} />
      </a>
      <a
        className="hover:-translate-y-0.5 hover:text-blue-500 transition"
        href="https://medium.com/@saxenashivam451"
        rel="noreferrer"
        target="_blank"
      >
        <BsMedium size={24} />
      </a>
    </div>
  );
};

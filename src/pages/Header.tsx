import { ReactNode, useState } from 'react';
import { Link } from 'react-scroll';
import { background, primaryVariant } from '../theme/Colors';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { SocialLinks } from '../components/SocialLinks';

interface Props {
  to: string;
  children: ReactNode;
  isSelected: boolean;
}
const NavLink = ({ to, children, isSelected }: Props) => (
  <Link
    className={`block hover:bg-sky-100 py-1 px-2 mx-4 rounded-lg ${
      isSelected && primaryVariant
    } transition cursor-pointer`}
    activeClass="active"
    smooth
    spy
    to={to}
  >
    {children}
  </Link>
);

export const NavBar = () => {
  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = () => setVisibility(!isVisible);
  return (
    <nav
      className={`sticky w-full top-0 p-4 flex justify-between ${background}`}
    >
      <div className="text-center ">
        <div
          className={`md:hidden cursor-pointer flex top-0 z-40 w-full `}
          onClick={(_e) => {
            toggleVisibility();
          }}
          id="menu-button"
        >
          {isVisible ? <AiOutlineClose size={24} /> : <HiMenu size={24} />}
        </div>
        <ul
          className={`md:flex transition-all ease-in-out ${
            !isVisible ? 'h-0' : 'h-64'
          } md:h-min overflow-hidden`}
        >
          <NavLink to="home" isSelected={true}>
            Home
          </NavLink>
          <NavLink to="about" isSelected={false}>
            About
          </NavLink>
          <NavLink to="projects" isSelected={false}>
            Projects
          </NavLink>
          <NavLink to="experience" isSelected={false}>
            Experience
          </NavLink>
          <NavLink to="education" isSelected={false}>
            Education
          </NavLink>
          <NavLink to="contact" isSelected={false}>
            Contact
          </NavLink>
        </ul>
      </div>

      <SocialLinks />
    </nav>
  );
};

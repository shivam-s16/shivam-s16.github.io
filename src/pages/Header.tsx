import { ReactNode, useState } from "react";
import { Link } from "react-scroll"
import { background, primaryVariant } from "../theme/Colors";
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai';


interface Props {
    to: string;
    children: ReactNode;
    isSelected: boolean;
}
const NavLink = ({ to, children, isSelected }: Props) => (
    <Link
        className={`block hover:bg-neutral-100 p-2 mx-4 rounded-lg ${isSelected && primaryVariant} transition cursor-pointer`}
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
            className={`sticky w-full transition-all ease-in-out p-4 flex justify-between ${background}`}
            style={{ backdropFilter: 'blur(20px)' }}
        >
            <p>Shivam</p>
            <div>
                <div
                    className={`md:hidden cursor-pointer`}
                    onClick={(_e) => {
                        toggleVisibility();
                    }}
                    id="menu-button"
                >
                    {isVisible ? <AiOutlineClose size={24} /> : <HiMenu size={24} />}
                </div>
                <ul className="md:flex">
                    <NavLink to="about" isSelected={true}>Home</NavLink>
                    <NavLink to="about" isSelected={false}>About</NavLink>
                    <NavLink to="about" isSelected={false}>Projects</NavLink>
                    <NavLink to="about" isSelected={false}>Experience</NavLink>
                    <NavLink to="about" isSelected={false}>Education</NavLink>
                    <NavLink to="about" isSelected={false}>Contact</NavLink>
                </ul>
            </div>
        </nav>
    )
}
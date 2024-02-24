import React, {useState} from "react";
import {Link} from 'react-scroll'
import logo from "../assets/profile.png"
import {FaBars, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
function NavBar(){
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [navColor,updateNavColor]=useState(false);
    const [expanded,updatedExpanded]=useState(false);
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className=' font-thin text-2xl italic font-serif mx-8 py-4 '>
                <img src={logo} className="h-[75px]"  />
            </div>
            <nav>
            <ul className='hidden md:flex gap-x-8'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='resume' smooth={true} duration={500}>
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            </nav>



        </div>


    )
}

export default NavBar;
import React from 'react';
import logo from '/assets/logo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 mb-20'>
        <div className="flex items-center flex-shrink-0">
            <img className='w-12 mx-2' src={logo} alt="logo" />
        </div>
        <div className='flex items-center justify-center gap-4 m-8 text-2xl'>
            <a href="https://www.linkedin.com/in/toluwase-ajise/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Whoistolu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/who_istolu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://x.com/Littletolu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter />
            </a>
        </div>
    </nav>
  );
};

export default Navbar;
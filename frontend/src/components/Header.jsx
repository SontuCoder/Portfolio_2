import React from 'react';
import logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <header className='fixed top-0 left-0 w-full h-29 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zink-900/0'>
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6
                            md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className='logo'>
                        <img src={logo} alt="Logo" height={40} width={40} />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                    className='menu-btn md:hidden'
                    onClick={null}>
                        <span className='material-symbols-rounded'>
                            menu
                        </span>
                    </button>
                    Navber
                </div>
                <a href="#contact" className=''>
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header;

import React, { useState } from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden lg:hidden'>
            {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}

            </div>
            <nav className={`md:flex lg:flex lg:text-3xl md:text-3xl  justify-around absolute md:static bg-indigo-200 w-full duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>

                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD </CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
            </nav>
        </div>
    );
};

export default Header;




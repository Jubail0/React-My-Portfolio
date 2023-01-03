import React, { useState } from 'react'
import './Navbar.scss'
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md'
import { BsNut } from 'react-icons/bs'
import {TiAdjustBrightness} from 'react-icons/ti';


const Navbar = ({setToggle}) => {
    const [activeNav, setActiveNav] = useState('#home')

    return (
        <nav>
            <a onClick={()=>setActiveNav('/')} href='/'                  className={activeNav === '#home' ? 'active' : '' }> <AiOutlineHome /></a>
            <a onClick={()=>setActiveNav('#about')} href='#about'        className={activeNav === '#about' ? 'active' : ''}> <BiBook /></a> 
            <a onClick={()=>setActiveNav('#skills')} href='#skills'      className={activeNav === '#skills' ? 'active' : ''}> <BsNut /></a>
            <a onClick={()=>setActiveNav('#projects')} href='#projects'  className={activeNav === '#projects' ? 'active' : '' }> <MdWorkOutline /></a>
            <a onClick={()=>setActiveNav('#contact')} href='#contact'    className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /></a>
            <span onClick={()=>setToggle(prevState => !prevState)} ><TiAdjustBrightness/></span>


        </nav>
    )
}

export default Navbar

import React from 'react'
import './Footer.scss';
import {AiFillGithub} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <a href='/' className='footer__logo'>Jubail Mallick</a>
        <ui className="permaLinks">
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ui>
        <div className="footer__socials">
        <a href='https://github.com/Jubail0' target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
        <a href='https://www.instagram.com/jscodes._/?igshid=OGQ2MjdiOTE%3D' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href='https://twitter.com/JubailMallick?t=txrv64d99cvQOCbFIZbBvA&s=08' target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></a>
        </div>

        <div className="footer__copyright">
        <small>&copy;Jubail Mallick. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer
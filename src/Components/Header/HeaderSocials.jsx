import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://github.com/Jubail0' target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
            <a href='https://www.instagram.com/jscodes._/?igshid=OGQ2MjdiOTE%3D' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials

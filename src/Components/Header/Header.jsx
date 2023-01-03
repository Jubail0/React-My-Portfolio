import React from 'react'
import CTA from './CTA'
import './Header.scss'
import ME from '../../Assets/Me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header id='/'>
            <div className="container header_container">
                <h5>Hello I am</h5>
                <h1>Jubail Mallick</h1>
                <HeaderSocials/>
                <h5 className='text-light'>Mern stack Developer</h5>
                <CTA/>
                <div className='myImage'>
                    <img src={ME}
                        alt='me'/>
                </div>
                <a href='#contact' className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header

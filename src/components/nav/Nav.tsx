import { useEffect, useState } from 'react';
import i2c_logo from '../../assets/i2c.png';
import './Nav.scss';

const Nav = () => {
    const [active, setActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.screen.width < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })


    function handleAddClass() {
        setActive(!active)
    }

    return (
        <div className='nav'>
            <div>
                <img className='nav__img' src={i2c_logo} width="55px" height="34" />
            </div>
            <div className='nav__hamburger' onClick={handleAddClass}>
            </div>
            <div className={`nav__items ${active && isMobile ? 'nav__items-dropdown' : ''}`}>
                <ul className='nav__list-items'>
                    <li className={active && isMobile ? 'nav__item-vertical' : 'nav__item-horizontal'}>About us</li>
                    <li className={active && isMobile ? 'nav__item-vertical' : 'nav__item-horizontal'}>Registration</li>
                    <li className={active && isMobile ? 'nav__item-vertical' : 'nav__item-horizontal'}>Careers</li>
                </ul>
                <button className={active && isMobile ? 'nav__btn-mobile' : 'nav__btn'}>
                    <span className='nav__btn-text'>Contact us</span>
                </button>
            </div>
        </div>
    )
}

export default Nav

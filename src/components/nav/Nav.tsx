import i2c_logo from '../../assets/i2c.png';
import './Nav.scss';

const Nav = () => {
    return (
        <div className='nav'>
            <div>
                <img className='nav__img' src={i2c_logo} width="55px" height="34" />
            </div>
            <div className='nav__items'>
                <ul className='nav__list-items'>
                    <li className='nav__item'>About us</li>
                    <li className='nav__item'>Registration</li>
                    <li className='nav__item'>Careers</li>
                </ul>
                <button className='nav__btn'>
                    <span className='nav__btn-text'>Contact us</span>
                </button>
            </div>
        </div>
    )
}

export default Nav

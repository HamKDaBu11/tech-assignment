import i2c_logo from '../../assets/i2c.png';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <hr className='footer__divider'></hr>
            <div className='footer__details'>
                <img src={i2c_logo} width="55px" height="34px" />
                <div className='footer__options'>
                    <ul className='footer__list-items'>
                        <li className='footer__item'>FAQs</li>
                        <li className='footer__item'>Privacy Policy</li>
                        <li className='footer__item'>Other</li>
                    </ul>
                    <button className='footer__btn'>
                        <span className='footer__btn-text'>Contact us</span>
                    </button>
                </div>
            </div>
            <div className='footer__statement'>
                <span>Copyright © 2023 i2c inc. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer

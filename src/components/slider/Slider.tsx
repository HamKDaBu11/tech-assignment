import './Slider.scss';

const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider__heading-container'>
                <h1 className='slider__heading'>Trusted by</h1>
                <p className='slider__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
            </div>
            <div className='slider__carousel'>
                <div className='slider__chevron-left'></div>
                <div className='slider__brands'>
                    <div className='slider__brand-microsoft'>
                        <div className='slider__top-left'></div>
                        <div className='slider__top-right'></div>
                        <div className='slider__bottom-left'></div>
                        <div className='slider__bottom-right'></div>
                        <div className='slider__microsoft-title'></div>
                    </div>
                    <div className='slider__brand-twitter'></div>
                    <div className='slider__brand-cocacola'></div>
                </div>
                <div className='slider__chevron-right'></div>
            </div>
        </div>
    )
}

export default Slider

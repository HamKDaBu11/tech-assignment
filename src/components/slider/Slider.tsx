import { useState } from 'react';
import './Slider.scss';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const carouselInfiniteScroll = () => {
    //     if (currentIndex === 2) {
    //         return setCurrentIndex(0);
    //     }

    //     return setCurrentIndex(currentIndex + 1);
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)

    //     return () => clearInterval(interval)
    // })

    // function plusSlides(n: any) {
    //     setSlideIndex(prevIndex => { return prevIndex += n })
    //     showSlides(slideIndex);
    // }

    // function showSlides(n: any) {
    //     let i;
    //     let slideIndex = 1;
    //     let slides = document.getElementsByClassName("brand") as HTMLCollectionOf<HTMLElement>;
    //     debugger
    //     // let dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) { setSlideIndex(1) }
    //     if (n < 1) { setSlideIndex(slides.length) }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slides[slideIndex-1].style.display = "block";
    //     // for (i = 0; i < dots.length; i++) {
    //     //     dots[i].className = dots[i].className.replace(" active", "");
    //     // }
    //     // slides[slideIndex - 1].style.display = "block";
    //     // dots[slideIndex - 1].className += " active";
    // }

    return (
        <div className='slider'>
            <div className='slider__heading-container'>
                <h1 className='slider__heading'>Trusted by</h1>
                <p className='slider__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
            </div>
            <div className='slider__carousel'>
                <div className='slider__chevron-left'></div>
                <div className='slider__brands'>
                    <div className='slider__brand-microsoft brand'>
                        <div className='slider__window-boxes'>
                            <div className='slider__top-left'></div>
                            <div className='slider__top-right'></div>
                            <div className='slider__bottom-left'></div>
                            <div className='slider__bottom-right'></div>
                        </div>
                        <div className='slider__microsoft-title'></div>
                    </div>
                    <div className='slider__brand-twitter brand'></div>
                    <div className='slider__brand-cocacola brand'></div>
                </div>
                <div className='slider__chevron-right' onClick={() => plusSlides(1)}></div>
            </div>
        </div>
    )
}

export default Slider

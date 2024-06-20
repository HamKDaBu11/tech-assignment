import { useState } from "react";
import "./Slider.scss";

const Slider = () => {
    const brands = [
        { className: "slider__brand-microsoft", content: "Microsoft" },
        { className: "slider__brand-twitter", content: "Twitter" },
        { className: "slider__brand-cocacola", content: "CocaCola" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [slideState, setSlideState] = useState('');

    const nextSlide = () => {
        setSlideState('next');
        setActiveIndex((prevIndex) => {
            return (
                prevIndex === brands.length - 1 ? 0 : prevIndex + 1
            )
        }
        );
        // debugger
    };
    const prevSlide = () => {
        setSlideState('prev');
        setActiveIndex((prevIndex) => {
            return (
                prevIndex < brands.length - 1 ? prevIndex + 1 : 0
            )
        }
        );
    };

    console.log("prevIndex", activeIndex);

    return (
        <div className="slider">
            <div className="slider__heading-container">
                <h1 className="slider__heading">Trusted by</h1>
                <p className="slider__detail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
                    tristique senectus dui pharetra sit.
                </p>
            </div>

            <div className="slider__carousel">
                <div className="slider__chevron-left" onClick={prevSlide}></div>

                <div
                    className="slider__brands"
                    style={{
                        transform: `translateX(${slideState === 'next' ? '-' : '+'}${activeIndex * (100 / brands.length)}%)`,
                    }}
                >
                    {brands.map((brand, index) => (
                        <div className={brand.className + " brand"} key={index}>
                            {brand.content === "Microsoft" && (
                                <>
                                    <div className="slider__window-boxes">
                                        <div className="slider__top-left"></div>
                                        <div className="slider__top-right"></div>
                                        <div className="slider__bottom-left"></div>
                                        <div className="slider__bottom-right"></div>
                                    </div>
                                    <div className="slider__microsoft-title"></div>
                                </>
                            )}{" "}
                        </div>
                    ))}
                </div>
                <div className="slider__chevron-right" onClick={nextSlide}></div>
            </div>
        </div>
    );
};

export default Slider;

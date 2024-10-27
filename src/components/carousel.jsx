/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import { useState, useEffect, useRef } from "react";

const CarouselComponent = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + data.length) % data.length);
        resetTimer();
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(handleNext, 3000);
    };

    useEffect(() => {
        timerRef.current = setInterval(handleNext, 3000);
        return () => clearInterval(timerRef.current);
    }, []);

    return (
        <Carousel className="rounded-xl w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
            <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrevious}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
            </IconButton>

            <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                </svg>
            </IconButton>

            {data.map((item, index) => (
                <div key={index} className={`relative h-full w-full ${index === currentIndex ? "block" : "hidden"}`}>
                    <img
                        src={item.image}
                        alt={`${item.name} image`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-black/25">
                        <div className="w-3/4 md:w-2/4 text-center h-full relative">
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-6 opacity-100 text-sm md:text-xl md:opacity-80 inset-x-0 bottom-20 absolute"
                            >
                                {item.quote}
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-2xl md:text-4xl lg:text-5xl inset-x-0 bottom-10 absolute"
                            >
                                {item.name}
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;

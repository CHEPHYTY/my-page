/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel, Typography } from "@material-tailwind/react";

const CarouselComponent = ({ data }) => {
    return (
        <Carousel
            className="rounded-xl w-full  sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
            autoplay={true}
            interval={2000}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {data.map((item, index) => (
                <div key={index} className="relative h-full w-full">
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
                                className="mb-12 opacity-100 text-sm md:text-2xl md:opacity-80 inset-x-0 bottom-20 absolute"
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

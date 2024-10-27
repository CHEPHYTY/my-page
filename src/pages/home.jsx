import CarouselComponent from "../components/carousel";
import GreetingCard from "../components/greetingCard";
import ProfileCard from "../components/profileCard";

const quotes = [
    {
        image: "https://raw.githubusercontent.com/CHEPHYTY/my-page/refs/heads/main/src/assets/Ellen-Ullman.jpg",
        quote: "There is always one more bug to fix. ",
        name: "Ellen Ullman"

    },
    {
        image: "https://raw.githubusercontent.com/CHEPHYTY/my-page/refs/heads/main/src/assets/Mark-Zuckerberg.jpg",
        quote: "People don't care about what you say, they care about what you build. ",
        name: "Mark Zuckerberg"

    },
    {
        image: "https://raw.githubusercontent.com/CHEPHYTY/my-page/refs/heads/main/src/assets/Linus-Torvalds.jpg",
        quote: "Software is like s*x, it's better when it's free. ",
        name: "Linus Torvalds"

    },
    {
        image: "https://raw.githubusercontent.com/CHEPHYTY/my-page/refs/heads/main/src/assets/Steve-Jobs.jpg",
        quote: "Everybody in this country should learn to program a computer because it teaches you how to think",
        name: "Steve Jobs"

    },
    {
        image: "https://raw.githubusercontent.com/CHEPHYTY/my-page/refs/heads/main/src/assets/Robert-C-Martin.jpg",
        quote: "Truth can only be found in one place: THE CODE. ",
        name: "Robert C. Martin"

    },
    {
        image: "https://raw.githubusercontent.com/CHEPHYTY/my-page/refs/heads/main/src/assets/Ratan-Tata.jpg",
        quote: "Life is not about finding yourself, it's about creating yourself. ",
        name: "Robert C. Martin"

    },
]

const Home = () => {
    return (
        <>
            <div className="w-full pt-6 px-10 gap-5">
                <div className="w-full md:w-full flex items-center justify-center  mb-4 md:mb-0 ">
                    {/* <div className="w-full md:w-[50%] flex items-center justify-center border-black border-2 mb-4 md:mb-0"> */}
                    <CarouselComponent data={quotes} />
                </div>

                {/* <div className="w-full md:w-[50%] flex items-center justify-center border-black border-2"> */}
                {/* <div className="w-full md:w-[50%] flex items-center border-2">
                    <ProfileCard />
                </div> */}

                <GreetingCard />
            </div>
        </>
    );
};

export default Home;

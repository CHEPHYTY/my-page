

import { Card, CardBody, Typography } from "@material-tailwind/react"


const GreetingCard = () => {
    return (
        <>
            <Card className=" card-body w-full h-[90vh] mt-[5vh] mb-[5vh] p-10 relative">
                <div className="ball">
                </div>
                <div className="shadow"></div>

                <CardBody
                    className="text-center px-20 pt-20 absolute top-0 bottom-0 left-0 right-0"
                >

                    <Typography
                        variant="h1"
                        color="black"
                        className="text-7xl"
                    >
                        Hi there! I'm Soumya, a passionate web developer on a mission to create beautiful, functional web experiences.
                    </Typography>


                    <Typography
                        variant="h3"
                        className="mt-5">
                        Bringing the heat to your web dreams with MERN magic!

                    </Typography>



                </CardBody>
            </Card>

        </>

    )
}
// Hi there! I’m [Your Name], a passionate web developer on a mission to create beautiful, functional web experiences.
export default GreetingCard
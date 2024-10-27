import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const pages = [
    {
        pageName: "Home",
        nav: "/"
    },
    {
        pageName: "About",
        nav: "/about"
    },
    {
        pageName: "Blogs",
        nav: "/blog"
    },
    {
        pageName: "Project",
        nav: "/project"
    },
];

function NavList({ pages }) {  // Ensure the pages prop is received
    return (
        <ul className="nav-list">
            {pages.map((item, index) => (  // Use map to render each page
                <Typography
                    key={index}
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium text-lg"
                >
                    <Link to={item.nav} className="links">
                        {item.pageName}
                    </Link>
                </Typography>
            ))}
        </ul>
    );
}

const NavigationBar = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 font-fira rounded-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 text-xl"
                    >
                        <Link to="/">
                            CHEPHYTY
                        </Link>
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList pages={pages} />  
                    </div>
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block text-base py-3 px-5"
                    >
                        <Link to="/contact">Contact me</Link>
                    </Button>

                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList pages={pages} />  {/* Pass pages here too */}
                    <Button fullWidth variant="gradient" size="sm" className="font-fira">
                        <Link to="/contact">Contact me</Link>
                    </Button>
                </Collapse>
            </Navbar>
            <Outlet />
        </>
    );
};

export default NavigationBar;

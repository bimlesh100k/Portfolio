import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "Home",
            bookmark: "#home",
        },
        {
            id: 2,
            link: "About",
            bookmark: "#about",
        },
        {
            id: 3,
            link: "Projects",
            bookmark: "#projects",
        },
        {
            id: 4,
            link: "Experience",
            bookmark: "#experience",
        },
        {
            id: 5,
            link: "Contacts",
            bookmark: "#contact",
        },
    ];
    return (
        <>
            <div id="nav" className="flex bg-black justify-between items-center w-full h-16 text-white ">
                <h1 className="font-signature font-medium text-gray-400 text-4xl ml-3">Bimlesh</h1>
                <ul className="hidden mr-5 md:flex">
                    {links.map(({ id, link,bookmark }) => (
                        <li key={id} className="px-4 font-semibold text-gray-400 hover:scale-105 duration-200 cursor-pointer"><a href={bookmark}>{link}</a></li>
                    ))}

                </ul>
                <div onClick={() => setNav(!nav)} className=" cursor-pointer mr-5 z-10 text-gray-400 md:hidden">
                    {/* <FaBars size={30} /> */}
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                        {nav &&(
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
                    {links.map(({ id, link,bookmark }) => (
                        <li key={id} className="px-4 cursor-pointer py-6 text-4xl font-normal text-gray-400 hover:scale-105 duration-200"><a href={bookmark}>{link}</a></li>
                    ))}
                </ul>
                        )}
            </div>

        </>
    )
}
export default Navbar;
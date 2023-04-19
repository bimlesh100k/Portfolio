import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social_icons = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/bimlesh-kumar-1b9741256/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/bimlesh100k",
            
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>

            ),
            href: 'mailto:bimlesh100k@gmail.com',
            // style: rounded-tr-md
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Bimlesh_Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ]
    return (
        <>

            <div className=" hidden md:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {links.map(({id, child, href, style, download}) => (
                        <li key={id} className={" flex justify-center items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + " " + style}>
                            <a target="_blank" download={download} href={href} className="flex justify-between items-center w-full  text-white font-light">
                                {child}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </>

    )
}
export default Social_icons;

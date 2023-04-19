import user1 from "../assets/user1.png";
import {MdKeyboardArrowRight} from "react-icons/md"
const Home=()=>
{
    return(
<>
<div id="home" className="mob:pt-10  md:g-slate-500 md:h-screen h-auto w-full bg-gradient-to-b from-black via-black  to-gray-800" name="home">
    <div className=" max-w-screen-lg mx-auto flex flex-col
     items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
            <h2 className=" text-4xl sm:text-6xl font-bold  text-white">
                I'am a Full Stack Developer
            </h2>
            <p className="text-gray-400 font-normal py-5 max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sunt, distinctio vel cupiditate doloremque beatae officiis in laborum alias. Quibusdam?</p>
       
        <div> 
            <button className=" group text-white w-fit py-3 px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 font-medium to-blue-500 cursor-pointer">
            <a href="../public/Bimlesh Resume.pdf" download="true">Resume</a> <span className="group-hover:rotate-90 duration-300"> <MdKeyboardArrowRight size={25}  className="ml-1"/></span>
        </button>
        </div>
        </div>
<div >
    <img src={user1} alt="pyprofile" className="rounded-2xl cursor-pointer mx-auto h-80  md:w-full  " />
</div>

    </div>
</div>

</>
    )
}
export default Home;

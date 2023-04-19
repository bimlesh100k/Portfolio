import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.svg";
import react from "../assets/react.svg";
import github from "../assets/github.svg";
import photoshop from "../assets/photoshop.svg";
import vite from "../assets/vite.svg";
const Experience=()=>{
    const portfolio=[
      
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style:'shadow-cyan-500'
        },
        
        {
            id:5,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:bootstrap,
            title:'Bootstrap',
            style:'shadow-purple-400'
        },
        {
            id:8,
            src:photoshop,
            title:'Photoshop',
            style:'shadow-blue-900'
        },
        {
            id:9,
            src:vite,
            title:'Vite',
            style:'shadow-pink-900'
        },
    ]
    return(
        <>
        <div id="experience" name="experience" className="mob:pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-auto">
            <div  className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Experience</p>
                    <p className="py-6">These are the technologies I'am worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {portfolio.map(({id,src,title, style})=>(

<div key={id} className={"shadow-md hover:scale-105 py-2 rounded-lg" + " " + style}>
                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                    ))}

                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Experience;
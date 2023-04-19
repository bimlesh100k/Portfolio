import pr1 from "../assets/pr1.webp";
import pr2 from "../assets/pr2.jpg";
import pr3 from "../assets/pr3.jpg";
import user1 from "../assets/user1.svg";
const Portfolio=()=>{
    const portfolio=[
        {
            id:1,
            src:pr1,
            links:'https://bimlesh100k.github.io/Hotstar/'
        },
        {
            id:2,
            src:pr2,
            links:'https://bimlesh100k.github.io/X-box-Template/'

        },
        {
            id:3,
            src:pr3,
            links:'https://bimlesh100k.github.io/Tour_-_Travel/'
        },
       
    ]
    return(
        <>
        <div id="projects" name="portfolio" className="mob:pt-10 bg-gradient-to-b from-black to-gray-800 h-auto w-full text-white ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div >
<div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0 px-12">
{portfolio.map(({id,src,links})=>(
<div key={id} className="shadow-md shadow-gray-600 rounded-lg">

<img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
<div className="flex items-center justify-center">
<button className="w-1/2 px-6 py-1  duration-200 hover:scale-105 m-4"><a href={links} target="_blank">Demo</a></button>
{/* <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 m-4">Code</button> */}
</div>
</div>
 ))}
</div>
                
            </div>
        </div>
        </>
    )
}
export default Portfolio;
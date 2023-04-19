const Contact=()=>
{
    return(
        <>
        <div id="contact" name="contact" className="mob:pt-10 w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            <div className="flex  justify-center items-center">
            <form action="https://getform.io/f/92060891-cbaa-4b75-b6a6-dbd9126ba027" method="post" className="flex flex-col w-full md:w-1/2">
                <input className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none" type="text" name="name" placeholder="Enter your Name"/>
                <input className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" type="text" name="email" placeholder="Enter your Email"/>
                <textarea name="messsage" placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" rows="10"></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>

            </form>
            </div> 
        </div>
        </div>
        </>
    )
}
export default Contact;
import up_arrow from "../assets/up_arrow.png";
const scroll_bar=()=>
{
    return(
        <>
        <div className="w-auto rounded-full  bottom-[15%] right-20 hidden md:flex fixed">
            <a href="#nav"><img src={up_arrow} alt="arrow" className="w-14 cursor-pointer fixed rounded-full bg-white " />
</a>
        </div>
        </>
    )
}
export default scroll_bar;
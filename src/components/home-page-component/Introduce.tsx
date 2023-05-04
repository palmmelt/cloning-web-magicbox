import { useSelector } from 'react-redux';
import { languageSelector } from '../../store/slices/languageSlice';


const Introduce = () => {
    const languageReducer = useSelector(languageSelector);
    return (
        <>
            <div className="flex sm:justify-between sm:flex-row m-14 justify-center items-center flex-col-reverse gap-10 h-fit pt-24 md:mx-52 ">
                <div className="flex flex-col gap-8">
                    <div data-aos="fade-up " >
                        <h1 className=" text-4xl font-bold text-[#2581E6]">All-in-One</h1>
                        <h1 className="text-4xl font-bold leading-8 mt-1">Development Services <br /> For Business</h1>
                    </div>
                    <div className="" data-aos="fade-up" >
                        {languageReducer.language == 1 ? <p className="font-medium pl-5">“We are a digital solutions provider<br />
                            that will transform your business.“</p> : <p className="font-medium pl-5">“เราคือผู้ให้บริการทางด้านดิจิทัลซอฟต์แวร์<br />
                            ที่จะมาช่วยสร้างการเปลี่ยนแปลง<br />
                            ให้แก่ธุรกิจของคุณ“</p>}
                    </div>
                    <div>
                        <div className='cursor-pointer border-2 pl-5 hover:border-none border-[#3801ff] rounded-full w-fit hover:bg-gradient-to-t from-[#530aff] to-[#ff0fff] p-2 text-[#3801ff] hover:text-white hover:scale-105 duration-1000'
                             >
                            <h1 className=''>Click Video<i className="ml-1 fa-solid fa-arrow-right"></i></h1>
                        </div>
                    </div>
                </div>
                <div className=" relative flex items-center justify-center w-[434px] h-[376px]"
                    data-aos="fade-up" >
                    <img src="https://static.wixstatic.com/media/3876e0_7c0176df7a3c4e4981ad4925106a0a88~mv2.png/v1/fill/w_434,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame-340-copy.png"
                        className=" object-cover z-10 flex items-center justify-center md:w-[434px] sm:h-[376px] w-[calc(80%+1.5vmin)] bg-cover " alt="" />
                    <div className=" z-0 absolute md:h-36 md:w-40 h-20 w-24 bg-black md:-left-10 md:-bottom-3 -left-1 bottom-6 rounded-tl-[90px] rounded-b-[10px] bg-gradient-to-b from-[#4aa4f8] to-[#0051ff]" />
                    <div className=" z-0 absolute md:h-36 md:w-40 h-20 w-24 bg-black md:-right-8 right-1 rounded-tr-[90px] rounded-b-[10px] bg-gradient-to-t from-[#530aff] to-[#ff0fff]" />
                </div>
            </div>
        </>
    )
}

export default Introduce
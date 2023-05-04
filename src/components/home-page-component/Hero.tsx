import mgb from '../../assets/mgb.png';

const Hero = () => {
    return (
        <div className=" md:h-[845px] h-[100vh] w-full flex items-center flex-col text-white gap-4 bg-black md:bg-[url('https://static.wixstatic.com/media/3876e0_22fd9998793f4b55aa17ac41c15212f0f000.jpg/v1/fill/w_1349,h_845,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/3876e0_22fd9998793f4b55aa17ac41c15212f0f000.jpg')] bg-fixed bg-cover ">
            <div className='md:hidden mt-32'>
                <img src={mgb} alt="" className='w-48 h-52' />
            </div>
            <img className="w-[calc(36%+1.5vmin)] md:mt-60 "
                src="https://static.wixstatic.com/media/001436_f6ddd092e19f4e5ea857aa6182cf6e08~mv2.png/v1/fill/w_495,h_154,al_c,q_85,enc_auto/Frame%20339.png" alt="" />
            <div className="flex flex-row text-[calc(110%+0.1vmin)] lg:text-4xl gap-2 cursor-default ">
                <span>
                    <h1>Creative</h1>
                </span>
                <span>
                    <h1 className="text-[#FFB611]">•</h1>
                </span>
                <span>
                    <h1>Develop</h1>
                </span>
                <span>
                    <h1 className="text-[#FFB611]">•</h1>
                </span>
                <span>
                    <h1>Inspire</h1>
                </span>
            </div>
        </div>
    )
}

export default Hero
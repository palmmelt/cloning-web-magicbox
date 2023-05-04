
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';

import { changeEN, changeTH, changeToggle, languageSelector } from '../../store/slices/languageSlice';
import { useAppDispatch } from '../../store/hook';
import { manuNav, manuicon, slidebar } from './navbarcss';

const NavBar = () => {
    //NavBar-Toggle
    const [toggleBar, setToggleBar] = useState<boolean>(true);

    const handleNav = () => {
        setToggleBar(!toggleBar);
    };

    //redux language
    const dispatch = useAppDispatch();
    const languageReducer = useSelector(languageSelector);

    return (
        <>
            <div className="flex w-full fixed z-50 justify-between items-center 
     px-3 md:px-[calc(15%-18vmin)] py-1 text-white top-0 ease-in-out duration-300 bg-black md:bg-[#4aa4f800] " >
                <div>
                    <img src="https://static.wixstatic.com/media/001436_37cebab95a15466b84ae393de71223b4~mv2.png/v1/crop/x_0,y_5,w_185,h_70/fill/w_186,h_70,al_c,lg_1,q_85,enc_auto/Logo.png" alt="Logo.png"
                        className=' w-[186px] h-[70px] object-cover '
                        srcSet="https://static.wixstatic.com/media/001436_37cebab95a15466b84ae393de71223b4~mv2.png/v1/crop/x_0,y_5,w_185,h_70/fill/w_186,h_70,al_c,lg_1,q_85,enc_auto/Logo.png 1x, https://static.wixstatic.com/media/001436_37cebab95a15466b84ae393de71223b4~mv2.png/v1/crop/x_0,y_5,w_185,h_70/fill/w_259,h_97,al_c,lg_1,q_85,enc_auto/Logo.png 2x" />
                </div>
                <div className="hidden md:flex flex-row md:gap-4 text-[calc(70%+0.8vmin)] justify-ce cursor-pointernter items-center ">
                    <ul className='flex flex-row gap-2 '>
                        <li className={manuNav}>
                            <a className='cursor-pointer'>Home</a>
                        </li>
                        <li className={manuNav}>
                            <a className='cursor-pointer'>Services</a>

                        </li>
                        <li className={manuNav}>
                            <a className='cursor-pointer'>Insights MBS</a>

                        </li>
                        <li className={manuNav}>
                            <a className='cursor-pointer'>Careers</a>

                        </li>
                        <li className={manuNav}>
                            <a className='cursor-pointer'>Contact</a>

                        </li>
                    </ul>
                    <div className="flex flex-row">
                        <span className="border-r p-2">
                            <h1
                                className={` cursor-pointer ${languageReducer.language == 1 ? '' : 'hover:text-[#4aa4f8]'}`}
                                onClick={() => {
                                    dispatch(changeEN());
                                }}>
                                EN
                            </h1>
                        </span>
                        <span className="p-2 ">
                            <h1
                                className={` cursor-pointer ${languageReducer.language == 2 ? '' : 'hover:text-[#4aa4f8]'}`}
                                onClick={() => {
                                    dispatch(changeTH());
                                }}>
                                TH
                            </h1>
                        </span>
                    </div>
                </div>
                <div
                    onClick={handleNav}
                    className={!toggleBar
                        ? "text-[#4aa4f8]  "
                        : "md:hidden  hover:text-[#4aa4f8] hover:scale-105 duration-300 "}
                >
                    {!toggleBar ? (
                        <AiOutlineClose size={25} className={manuicon} />
                    ) : (
                        <AiOutlineMenu size={25} className={manuicon} />
                    )}
                </div>
                <div
                    className={
                        !toggleBar
                            ? "fixed right-0 top-20 w-[60%] h-fit border-r border-r-gray-900 ease-in-out peer:transition duration-300 bg-[#000000] border border-[#4aa4f8] py-5 rounded-l-3xl md:hidden bg-[#000000e8] "
                            : "fixed right-[-300%]"
                    }
                >
                    {!toggleBar && (
                        <div className="flex flex-col gap-3  justify-center ml-5 ">
                            <div className="bg-black w-5 h-5 fixed top-[70px] right-4 rotate-45 border-l-2 border-t-2  border-[#4aa4f8]"></div>
                            <a
                                className={slidebar}
                            >
                                Home
                            </a>
                            <a
                                className={slidebar}
                            >
                                Services
                            </a>
                            <a
                                className={slidebar}
                            >
                                Insigh MBS
                            </a>
                            <a
                                className={slidebar}
                            >
                                Careers
                            </a>
                            <a
                                className={slidebar}
                            >
                                Contact
                            </a>
                            <a className={slidebar}
                                onClick={() => {
                                    dispatch(changeToggle());
                                }}>
                                {languageReducer.language == 1 ? <p>Language : EN</p> : <p>Language : TH</p>}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default NavBar
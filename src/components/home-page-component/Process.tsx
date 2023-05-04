import { useSelector } from 'react-redux';

import { languageSelector } from '../../store/slices/languageSlice';

const Process = () => {
    const languageReducer = useSelector(languageSelector);
    return (
        <>
            <div className="flex flex-col p-14 items-center gap-10 h-fit pt-24 md:px-52 bg-[#f1ccff]  ">
                {languageReducer.language == 1 ? <h1 className=" text-2xl font-bold text-[#2581E6] text-center" data-aos="fade-up">IT IS NOT DIFFICULT TO DRIVE A BUSINESS WITH TECHNOLOGY.<br />
                    MAGIC BOX SOLUTIONS CAN HELP YOU.</h1> : <h1 className=" text-2xl font-bold text-[#2581E6] text-center" data-aos="fade-up">ขับเคลื่อนธุรกิจด้วยเทคโนโลยีไม่ใช่เรื่องยาก<br />
                    MAGIC BOX SOLUTIONS สามารถช่วยคุณได้</h1>}
                <div className="grid grid-flow-row-dense xl:grid-cols-3 sm gap-6  ">
                    <div className=' cursor-pointer h-auto gap-6 flex flex-col text-center items-center
                     bg-white p-6 rounded-3xl rounded-tl-[5rem] hover:bg-gradient-to-t from-[#530aff] to-[#ff0fff]
                     hover:text-white shadow-[#aa6e68] shadow-2xl '
                        data-aos="fade-up">
                        <div>
                            <i className=" font-bold text-6xl fa-regular fa-comments "></i>
                        </div>
                        <div>
                            {languageReducer.language == 1 ?
                                <h1 className=' '> keep your business moving fast<br />We are ready to give you advice. </h1> :
                                <h1 className=' '> เพื่อให้ธุรกิจขับเคลื่อนไปอย่างรวดเร็ว<br />เราพ้รอมให้คำปรึกษาแก่คุณ</h1>}
                        </div>
                        <div className='border-t-2 border-gray-600 w-[20vh]' />
                        <div>
                            {languageReducer.language == 1 ?
                                <p className='text-xs '>We evevate your business to the next level. We can help you build a high-quality and highly effective strategy. We also provide comprehensive digital solutions. for you to meet the needs of doing your business and meet the goals.</p> :
                                <p className='text-xs'>เพื่อยกระดับธุรกิจของคุณให้ก้าวขึ้นไปอีกขั้น เราสามารถช่วยคุณสร้างกลยุทธ์ที่มีคุณภาพและมีประสิทธิภาพสูงอีกทั้งเรายังให้บริการทางด้านดิจิทัลโซลูชั่นส์ที่ครบวงจรเพื่อให้คุณตอบโจทย์ในการทำธุรกิจของคุณ และตอบโจทย์กับเป้าหมาย</p>}
                        </div>
                        <div>
                            <h1 className=' '>Technology Consult</h1>
                        </div>
                    </div>
                    <div className=' cursor-pointer h-auto gap-6 flex flex-col text-center items-center
                     bg-white p-6 rounded-3xl rounded-tl-[5rem] hover:bg-gradient-to-t from-[#530aff] to-[#ff0fff]
                     hover:text-white shadow-[#aa6e68] shadow-2xl '
                        data-aos="fade-up">
                        <div>
                            <i className=" font-bold text-6xl fa-solid fa-code "></i>
                        </div>
                        <div>
                            {languageReducer.language == 1 ?
                                <h1 className=''>Build effective software <br />in 4 months</h1> :
                                <h1 className=''> อยากมีซอฟต์แวร์เจ๋ง ๆ <br /> ให้เราช่วยคุณสร้างสรรค์ได้</h1>}
                        </div>
                        <div className='border-t-2 border-gray-600 w-[20vh] ' />
                        <div>
                            {languageReducer.language == 1 ?
                                <p className='text-xs '>Turn your ideas into software that can meet your business design and development needs effectively. and very well worth the price by a team of professionals eager to assist you in making your dreams a reality</p> :
                                <p className='text-xs '>เปลี่ยนไอเดียของคุณให้เป็นจริงได้ ให้เราช่วยคุณสร้างสรรค์ซอฟต์แวร์ที่สามารถตอบโจทย์ธุรกิจของคุณออกแบบและพัฒนาบนระยะเวลาที่เหมาะสมและราคาที่คุ้มค่าโดยทีมมืออาชีพที่พร้อมจะช่วยให้ไอเดียของคุณเป็นจริง</p>}
                        </div>
                        <div>
                            <h1 className=' '>Customized Software</h1>
                        </div>
                    </div>
                    <div className=' cursor-pointer h-auto gap-6 flex items-center
                    flex-col text-center bg-white p-6 rounded-3xl rounded-tl-[5rem] hover:bg-gradient-to-t from-[#530aff] to-[#ff0fff]
                    hover:text-white shadow-[#aa6e68] shadow-2xl '
                        data-aos="fade-up">
                        <div>
                            <i className="font-bold text-6xl fa-solid fa-person"></i>
                        </div>
                        <div>
                            {languageReducer.language == 1 ?
                                <h1 className=' '>Read-to-use Developement<br />Resources from Day 1</h1> :
                                <h1 className=''>ไม่ต้องเสียเวลาจัดหาคนทำงานให้ยุ่งยาก <br /> เรามีทีมเชี่ยวชาญที่พร้อมช่วยคุณ</h1>}
                        </div>
                        <div className='border-t-2 border-gray-600 w-[20vh]' />
                        <div>
                            {languageReducer.language == 1 ?
                                <p className='text-xs '>Be free from one's choice of Resource recruitment! Save time on recruitment and training your developers, our teams can start developing your product right away.</p> :
                                <p className='text-xs '>เพื่อยกระดับธุรกิจของคุณให้ก้าวขึ้นไปอีกขั้น เราสามารถช่วยคุณสร้างกลยุทธ์ที่มีคุณภาพและมีประสิทธิภาพสูงอีกทั้งเรายังให้บริการทางด้านดิจิทัลโซลูชั่นส์ที่ครบวงจรเพื่อให้คุณตอบโจทย์ในการทำธุรกิจของคุณ และตอบโจทย์กับเป้าหมาย</p>}
                        </div>
                        <div>
                            <h1 className=' '>Resource Augmentation</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process
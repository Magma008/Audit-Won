import React, { useState } from 'react'
import img from "../Images/logo.png"
import about from "../Images/info.png"
import service from "../Images/customer-service.png"
import contact from "../Images/phone.png"
import uzb from "../Images/uzbekistan.png"
import eng from "../Images/england.png"
import css from "./Navbar.css"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='fixed top-0 w-full xl:bg-teal-500 z-[200000]'>
            <div className='divide'>

                <div className='flex items-center gap-4 justify-between w-full bg-teal-500 px-5 py-3 md:px-10 md:py-4'>
                    <div className="flex items-center">
                        <img src={img} className='w-[7rem] md:w-[10rem]' alt="logo" />
                        <div>
                            <a href="#content" className='md:text-[24px] text-white font-[700]'>
                                <h1 className='text-[14px] sm:text-[20px]'>Аудиторская организация <br /> ООО «INTERNATIONAL AUDIT CONSULTING»</h1>
                            </a>
                        </div>
                    </div>
                    <div className={`button ul xl:hidden ${isOpen ? "rotate-90" : ""}`} onClick={() => {setIsOpen(!isOpen)}}>
                        <div className="start"></div>
                        <div className="middle"></div>
                        <div className="end"></div>
                    </div>
                </div>

                <ul className={`flex flex-col px-5  md:px-10 bg-teal-500 ul transition-all delay-300 xl:flex-row ${isOpen ? "h-[20rem]" : "h-[0px]"} xl:h-auto w-full overflow-hidden gap-2 md:gap-6  justify-between text-white font-[600]`}>
                    <li>
                        <a className='flex justify-start items-center gap-2 text-[20px] md:text-[25px]' href="#content"><img src={about} className='w-[30px]' alt="image" />О нас</a>
                    </li>
                    <li>
                        <a className='flex justify-start items-center gap-2 text-[20px] md:text-[25px]' href="#swiper"><img src={service} className='w-[30px]' alt="image" />Услуги</a>
                    </li>
                    <li>
                        <a className='flex justify-start items-center gap-2 text-[20px] md:text-[25px]' href="#footer"><img src={contact} className='w-[30px]' alt="image" />Контакты</a>
                    </li>
                    <li>
                        <a className='flex justify-start items-center gap-2 text-[20px] md:text-[25px]' href="#"><img src={uzb} className='w-[30px]' alt="image" />Uzb</a>
                    </li>
                    <li className='pb-2'>
                        <a className='flex justify-start items-center gap-2 text-[20px] md:text-[25px]' href="#"><img src={eng} className='w-[30px]' alt="image" />Eng</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
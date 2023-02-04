
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { delay, easeInOut, motion } from "framer-motion"

function Navbra() {

    const [showMenu, setShowMenu] = useState(false);

    const [showDropdown_M, setShowDropdown_M] = useState(false);
    const [showDropdown_B, setShowDropdown_B] = useState(false);
    const [showDropdown_A, setShowDropdown_A] = useState(false);
    const [showDropdown_C, setShowDropdown_C] = useState(false);


    

  return (
    <div className='fixed w-full h-12 z-100  dark:bg-neutral-900 bg-slate-100'>
        <div className='flex justify-around items-center w-full h-full px-2 2xl:px-16'>

            {/* button */}

            <motion.div whileTap={{rotate: 90}}  className='absolute left-5 top-3 z-10 cursor-pointer'>
                {showMenu ? <AiOutlineClose className='dark:text-white text-black' size={25} onClick={() => setShowMenu(!showMenu)}/> : <AiOutlineMenu className='dark:text-white text-black' size={25} onClick={() => setShowMenu(!showMenu)}/>}
            </motion.div>
            
            {/* Menu */}
            {showMenu &&(
                <div  className={showMenu ? 'fixed left-0 top-0 w-screen h-screen bg-fixed  dark:bg-neutral-900 bg-slate-100 p-10 ease-in-out duration-500':'absolute left-0 -translate-y-full flex justify-center items-center w-full h-screen menu-mob bg-cover bg-fixed bg-center text-center ease-out duration-500  bg-black/80 z-[2]'}>
                <motion.ul className='dark:text-gray-300 text-netural-700 flex flex-col mt-6 2xl:pl-16 2xl:top-10'>
                <Link className=' flex justify-center -mt-10 text-xl font-semibold dark:text-white' href={'/'}><h2>Ash_2k7</h2></Link>

                {/* Models */}
                    <motion.div className=' xl:flex pt-16 mt-5 md:pt-2 lg:mt-14 2xl:pt-5 xl:items-center xl:text-center ease-in-out duration-300' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.5}} onMouseEnter={() => setShowDropdown_M(true)}onMouseLeave={() => setShowDropdown_M(false)} >
                        <motion.span className='text-2xl font-semibold uppercase sm:text-4xl lg:ml-10  xl:text-5xl  2xl:text-6xl dark:hover:text-white duration-300 hover:text-black' >Models</motion.span>
                        {showDropdown_M&&(
                            <ul onClick={() => setShowMenu(false)} className='xl:flex py-4'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='pr-5 xl:px-5'><Link className='text-xl uppercase' href='/'>Chiron</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='pr-5'><Link className='text-xl uppercase' href='/'>W16 mistral</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='pr-5'><Link className='text-xl uppercase' href='/'>one off</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className='pr-5'><Link className='text-xl uppercase' href='/'>concept car</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.15}} className='pr-5'><Link className='text-xl uppercase' href='/'>veyron</Link></motion.li>
                            </ul>
                        )}
                        </motion.div>

                            {/* brand */}

                            <motion.div className=' xl:flex mt-5 md:pt-2 xl:items-center xl:text-center ease-in-out duration-300' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.65}} onMouseEnter={() => setShowDropdown_B(true)}onMouseLeave={() => setShowDropdown_B(false)} >
                        <motion.span className='text-2xl font-semibold uppercase sm:text-4xl lg:ml-10  xl:text-5xl  2xl:text-6xl dark:hover:text-white duration-300 hover:text-black' >Brand</motion.span>
                        {showDropdown_B&&(
                            <ul onClick={() => setShowMenu(false)} className='xl:flex py-4'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='pr-5 xl:px-5'><Link className='text-xl uppercase' href='/'>History</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='pr-5'><Link className='text-xl uppercase' href='/'>historic models</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='pr-5'><Link className='text-xl uppercase' href='/'>molsheim</Link></motion.li>
                            </ul>
                        )}
                        </motion.div>

                        {/* ownership */}

                        <motion.div className=' xl:flex mt-5 md:pt-2 xl:items-center xl:text-center ease-in-out duration-300' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.75}} onMouseEnter={() => setShowDropdown_A(true)}onMouseLeave={() => setShowDropdown_A(false)} >
                        <motion.span className='text-2xl font-semibold uppercase sm:text-4xl lg:ml-10  xl:text-5xl  2xl:text-6xl dark:hover:text-white duration-300 hover:text-black' >OwnerShip</motion.span>
                        {showDropdown_A&&(
                            <ul onClick={() => setShowMenu(false)} className='xl:flex py-4'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='pr-5 xl:px-5'><Link className='text-xl uppercase' href='/'>CUSTOMER SERVICE</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='pr-5'><Link className='text-xl uppercase' href='/'>ACCESSORIES</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='pr-5'><Link className='text-xl uppercase' href='/'>SUR MESURE</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className='pr-5'><Link className='text-xl uppercase' href='/'>LA MAISON PUR SANG</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.15}} className='pr-5'><Link className='text-xl uppercase' href='/'>FINANCIAL SERVICES</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.45}} className='pr-5'><Link className='text-xl uppercase' href='/'>RECALLS</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.75}} className='pr-5'><Link className='text-xl uppercase' href='/'>FIND A BUGATTI PARTNER</Link></motion.li>

                            </ul>
                        )}
                        </motion.div>

                        {/* life style */}

                    <motion.div onClick={() => setShowMenu(false)} initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.85}} className='mt-5 text-2xl font-semibold uppercase sm:text-4xl md:pt-2 lg:ml-10 xl:text-5xl 2xl:pt-5 2xl:text-6xl dark:hover:text-white duration-300 hover:text-black'><Link  href='/'>LifeStyle</Link></motion.div>

                    {/* Company */}

                    <motion.div className=' xl:flex mt-5 md:pt-2 xl:items-center xl:text-center ease-in-out duration-300' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.95}} onMouseEnter={() => setShowDropdown_C(true)}onMouseLeave={() => setShowDropdown_C(false)} >
                        <motion.span className='text-2xl font-semibold uppercase sm:text-4xl lg:ml-10  xl:text-5xl  2xl:text-6xl dark:hover:text-white duration-300 hover:text-black' >Company</motion.span>
                        {showDropdown_C&&(
                            <ul onClick={() => setShowMenu(false)} className='xl:flex py-4'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='pr-5 xl:px-5'><Link className='text-xl uppercase' href='/'>CAREER</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='pr-5'><Link className='text-xl uppercase' href='/'>ETHICS AND CULTURE</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='pr-5'><Link className='text-xl uppercase' href='/'>CONTACT</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className='pr-5'><Link className='text-xl uppercase' href='/'>NEWS</Link></motion.li>

                            </ul>
                        )}
                        </motion.div>
                </motion.ul>
                
            </div>
            )}


            <Link className='text-xl font-semibold dark:text-white' href={'/'}><h2>Ash_2k7</h2></Link>

        </div>
    </div>
  )
}

export default Navbra
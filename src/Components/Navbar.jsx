import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { easeInOut, motion } from "framer-motion"

function Navbra() {
    // ham burher
    const [showMenu, setShowMenu] = useState(false);

    //dropdown
    const [showDropdown_M, setShowDropdown_M] = useState(false);
    const [showDropdown_B, setShowDropdown_B] = useState(false);
    const [showDropdown_A, setShowDropdown_A] = useState(false);
    const [showDropdown_C, setShowDropdown_C] = useState(false);

    

  return (
    <div className='nav'>
        <div className='header'>

            {/* button */}

            <motion.div whileTap={{rotate: 90}}  className='burger-container'>
                {showMenu ? <AiOutlineClose className='burger-btn' size={25} onClick={() => setShowMenu(!showMenu)}/> : <AiOutlineMenu className='burger-btn' size={25} onClick={() => setShowMenu(!showMenu)}/>}
            </motion.div>
            
            {/* Menu */}
            {showMenu &&(
                <div  className={showMenu ? 'header-navigation':'.header-navigation1'}>
                <motion.ul className='mainnav'>
                <Link className='page-header-logo ' href={'/'}><h2>Ash_2k7</h2></Link>

                {/* Models */}
                    <motion.div className='mainnav-menu' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.5}} onMouseEnter={() => setShowDropdown_M(true)}onMouseLeave={() => setShowDropdown_M(false)} >
                        <motion.span className='mainnav-menu-item-with-sub' >Models</motion.span>
                        {showDropdown_M&&(
                            <ul onClick={() => setShowMenu(false)} className='sub-menu'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='sub-menuItem'><Link className='sub-menu-text' href='/'>Chiron</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>W16 mistral</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>one off</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>concept car</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.15}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>veyron</Link></motion.li>
                            </ul>
                        )}
                        </motion.div>

                            {/* brand */}

                            <motion.div className='mainnav-menu-item' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.65}} onMouseEnter={() => setShowDropdown_B(true)}onMouseLeave={() => setShowDropdown_B(false)} >
                        <motion.span className='mainnav-menu-item-with-sub' >Brand</motion.span>
                        {showDropdown_B&&(
                            <ul onClick={() => setShowMenu(false)} className='sub-menu'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='sub-menuItem'><Link className='sub-menu-text' href='/'>History</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>historic models</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>molsheim</Link></motion.li>
                            </ul>
                        )}
                        </motion.div>

                        {/* ownership */}

                        <motion.div className='mainnav-menu-item' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.75}} onMouseEnter={() => setShowDropdown_A(true)}onMouseLeave={() => setShowDropdown_A(false)} >
                        <motion.span className='mainnav-menu-item-with-sub' >OwnerShip</motion.span>
                        {showDropdown_A&&(
                            <ul onClick={() => setShowMenu(false)} className='sub-menu'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='sub-menuItem'><Link className='sub-menu-text' href='/'>CUSTOMER SERVICE</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>ACCESSORIES</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>SUR MESURE</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>LA MAISON PUR SANG</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.15}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>FINANCIAL SERVICES</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.45}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>RECALLS</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:1.75}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>FIND A BUGATTI PARTNER</Link></motion.li>

                            </ul>
                        )}
                        </motion.div>

                        {/* life style */}

                    <motion.div onClick={() => setShowMenu(false)} initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.85}} className='mainnav-menu-item'><Link className='mainnav-menu-item-with-sub'  href='/'>LifeStyle</Link></motion.div>

                    {/* Company */}

                    <motion.div className='mainnav-menu-item' initial = {{scale:1.25,opacity:0}} whileInView = {{scale:1,opacity:1}} transition = {{ease:easeInOut, duration:0.95}} onMouseEnter={() => setShowDropdown_C(true)}onMouseLeave={() => setShowDropdown_C(false)} >
                        <motion.span className='mainnav-menu-item-with-sub' >Company</motion.span>
                        {showDropdown_C&&(
                            <ul onClick={() => setShowMenu(false)} className='sub-menu'>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}} className='sub-menuItem'><Link className='sub-menu-text' href='/'>CAREER</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.55}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>ETHICS AND CULTURE</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.75}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>CONTACT</Link></motion.li>
                                <motion.li initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.95}} className='sub-menu-Item'><Link className='sub-menu-text' href='/'>NEWS</Link></motion.li>

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
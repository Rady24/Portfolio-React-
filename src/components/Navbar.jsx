import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import {Link} from 'react-scroll'


import { useTranslation } from 'react-i18next'




const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const {t, i18n} = useTranslation();
    const lngs = {
      en: { nativeName: 'English' },
      fr: { nativeName: 'Français' }
    }
  return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192F] text-gray-300">
            <div className='flex flex-row gap-4'>
                <img src={Logo} alt="logo" style={{width: '50px'}} />
                <div className='flex flex-row gap-4 items-center'>
                    {Object.keys(lngs).map((lng) => (
                    <button  key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </button>
                    ))}
                </div>
            </div>


            {/* menu */}
                
                <ul className='hidden md:flex'>
                    <li><Link to="home" smooth={true} duration={500} >
                            {t('home')}
                            </Link>
                    </li>
                    <li><Link to="about" smooth={true} duration={500} >
                            {t('about')}
                            </Link>
                    </li>
                    <li><Link to="skills" smooth={true} duration={500} >
                            {t('skills')}
                            </Link>
                    </li>
                    <li><Link to="work" smooth={true} duration={500} >
                            {t('work')}
                            </Link>
                    </li>
                    <li><Link to="contact" smooth={true} duration={500} >
                            {t('contact')}
                            </Link>
                    </li>
                    
                </ul>

            {/* Burger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mob menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192F] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} >
                            {t('home')}
                            </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            {t('about')}
                            </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                            {t('skills')}
                            </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} >
                            {t('work')}
                            </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                            {t('contact')}
                            </Link></li>
            </ul>


            {/* Social icons */}
            <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="https://www.linkedin.com/in/radmyr-deriabin-a60b41242/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="https://github.com/Rady24">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        
                            
                            <Link className='flex justify-between items-center w-full text-gray-300 ' to="contact" smooth={true} duration={500} >
                            Email <HiOutlineMail size={30}/>
                            </Link>
                        
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300 ' href="https://drive.google.com/drive/folders/107ms_WReMGSml82o4FKUOSKd2TWe8KhZ?usp=share_link">
                            CV <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar
import React from 'react'
import { useTranslation } from "react-i18next";
const About = () => {

    const {t} = useTranslation();

    return (
      
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                  {t('about')}
                </p>
              </div>
              <div></div>
              </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>{t('introduction')}</p>
                </div>
                <div>
                  <p className='pt-1'>{t('introduction2')}</p> 
                </div>
              </div>
          </div>
        </div>
      );
}

export default About
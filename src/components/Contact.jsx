import React from 'react'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' >
        <form method='POST' action="https://getform.io/f/f505b87d-a0f0-4acd-b06a-7c823ea58414" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// {t('submit')}</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder={t('name')} name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='E-mail' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>{t('lets')}</button>
        </form>
    </div>
  )
}

export default Contact
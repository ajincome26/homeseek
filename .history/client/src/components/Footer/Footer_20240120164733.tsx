import { Link } from 'react-router-dom'
import { text } from '~/constants/data'
import contact from '../assets/contact.png'

const Footer = () => {
  return (
    <div className='container'>
      <div className='border border-[#ccc] w-[75%] bg-white mt-7 p-8 text-center text-secondary rounded-md shadow-md'>
        <div className='w-full h-[200px]'>
          <img src={contact} alt='thumbnal' className='object-contain w-full h-full' />
        </div>
        <h2 className='mb-3 text-lg font-bold'>{text.title}</h2>
        <div className='flex items-center justify-around'>
          {text.contact.map((item, index) => (
            <div key={index} className='flex flex-col'>
              <span className='uppercase text-lg font-bold text-[#0460e3]'>{item.title}</span>
              <Link
                to={'/'}
                className='text-lg font-bold hover:text-[#977616] transition-colors ease-linear duration-300 cursor-pointer'
              >{`Điện thoại: ${item.phone}`}</Link>
              <Link
                to={'/'}
                className='text-lg font-bold hover:text-[#977616] transition-colors ease-linear duration-300 cursor-pointer'
              >{`Zalo: ${item.zalo}`}</Link>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-5'>
          {/* <Button
            text='Gửi liên hệ'
            textColor='text-white'
            bgColor='bg-sixth'
            padding='px-5 py-2'
            // onClick={() => {
            //   goLogin(false);
            // }}
            hover
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Footer

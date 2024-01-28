import { Link } from 'react-router-dom'
import { textContact } from '~/constants/data'
import { path } from '~/constants/path'
import contact from '../../assets/contact.png'
import { Button } from '../Button'

const Footer = () => {
  return (
    <div className='container border border-[#ccc] bg-white mt-7 p-8 text-center text-primary rounded-md shadow-md'>
      <div className='w-full h-[200px]'>
        <img src={contact} alt='thumbnal' className='object-contain w-full h-full' />
      </div>
      <h2 className='mb-3 text-lg font-bold'>{textContact.title}</h2>
      <div className='flex items-center justify-around'>
        {textContact.contact.map((item, index) => (
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
        <Button
        // onClick={() => {
        //   goLogin(false);
        // }}
        />
        <Button to={path.LOGIN} className='px-5 py-2 text-white bg-sixth' hover>
          Gửi liên hệ
        </Button>
      </div>
    </div>
  )
}

export default Footer

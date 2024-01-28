import { textLocation } from '~/constants/data'

const Header = () => {
  return (
    <div className='flex gap-5'>
      {textLocation.map((item) => (
        <div
          className='cursor-pointer shadow-lg rounded-lg overflow-hidden hover:bg-[#ccc] transition-all ease-linear duration-300'
          key={item.id}
        >
          <div className='w-[200px] h-[120px]'>
            <img src={item.image} alt={item.name} className='object-cover w-full h-full' />
          </div>
          <div className='py-2 font-semibold text-center text-fourth'>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Header

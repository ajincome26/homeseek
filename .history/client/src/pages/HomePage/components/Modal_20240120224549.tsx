import { useRef } from 'react'
import { CategoryType } from '~/types/other.type'
import { Province } from '~/types/province.type'
import icons from '~/utils/icons'

export interface ModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  data: unknown[]
  name: string
  title: string
  handleSubmit?: () => void
  queries?: object
  arrMinMax?: object
}

const { BsArrowLeftCircle } = icons

const Modal = ({ setIsShowModal, data, name, title, handleSubmit, queries, arrMinMax }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null)
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // e.stopPropagation()
    if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
      console.log('x')
      setIsShowModal(false)
    }
  }
  const handleActive = () => {}
  const handleBeforeSubmit = () => {}
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full bg-overlay-60 text-secondary' onClick={handleOnClick}>
      <div
        className='w-[35%] bg-primary bg-opacity-[85] text-white relative left-1/2 top-[10%] translate-x-[-50%] rounded-lg'
        // ref={nodeRef}
      >
        <div className='relative flex items-center p-3 border-b border-gray-200'>
          <span
            className='absolute cr-hover-text-yellow'
            // onClick={() => setIsShowModal(false)}
          >
            <BsArrowLeftCircle size={25} className='cursor-pointer' />
          </span>
          <div className='mx-auto text-2xl font-bold'>{title}</div>
        </div>
        {(name === 'category' || name === 'province') && (
          <div className='flex flex-col gap-3 px-5 py-3'>
            <div className='flex items-center gap-3 pb-3 search-item-border'>
              <input
                type='radio'
                name={name}
                id={'default'}
                // checked={!queries?.[`${name}Code`] ? true : false}
                // onClick={
                // () =>
                // handleSubmit({
                //   [name]: name === 'category' ? 'Tất cả' : 'Toàn quốc',
                //   [`${name}Code`]: null
                // })
                // }
              />
              <label htmlFor={'default'} className='text-lg cursor-pointer cr-hover-text-yellow'>
                {name === 'category' ? 'Tất cả' : 'Toàn quốc'}
              </label>
            </div>
            {name === 'category'
              ? (data as CategoryType[])?.map((item) => (
                  <div key={item.id} className='flex items-center gap-3 pb-3 search-item-border'>
                    <input
                      type='radio'
                      name={name}
                      id={item.name}
                      // checked={item.code === queries?.[`${name}Code`] ? true : false}
                      // onClick={() =>
                      //   handleSubmit({
                      //     [name]: item.value,
                      //     [`${name}Code`]: item.code
                      //   })
                      // }
                    />
                    <label htmlFor={item.name} className='text-lg cursor-pointer cr-hover-text-yellow'>
                      {item.name}
                    </label>
                  </div>
                ))
              : (data as Province[])?.map((item) => (
                  <div key={item.province_id} className='flex items-center gap-3 pb-3 search-item-border'>
                    <input
                      type='radio'
                      name={name}
                      id={item.province_name}
                      // checked={item.code === queries?.[`${name}Code`] ? true : false}
                      // onClick={() =>
                      //   handleSubmit({
                      //     [name]: item.value,
                      //     [`${name}Code`]: item.code
                      //   })
                      // }
                    />
                    <label htmlFor={item.province_name} className='text-lg cursor-pointer cr-hover-text-yellow'>
                      {item.province_name}
                    </label>
                  </div>
                ))}
          </div>
        )}
        {(name === 'price' || name === 'area') && (
          <div>
            <div className=''>
              <div className='mt-5 text-lg text-center content-price'>
                {/* {percent1 === percent2 && percent1 === 100
                  ? name === 'price'
                    ? 'Trên 15 triệu'
                    : 'Trên 90 m2'
                  : `Từ
            ${percent1 <= percent2 ? conver100toTarget(percent1) : conver100toTarget(percent2)} - ${
              percent2 >= percent1 ? conver100toTarget(percent2) : conver100toTarget(percent1)
            } ${name === 'price' ? 'triệu' : 'm2'}`} */}
              </div>
              <div className='flex items-center justify-center px-3 pt-5 pb-14'>
                <div className='flex flex-col items-center justify-center relative w-[90%]'>
                  <div
                    // onClick={handleClickTrack}
                    className='slider-track w-full h-[5px] absolute bg-fifth top-0 bottom-0 rounded-full'
                  ></div>
                  <div
                    // onClick={handleClickTrack}
                    className='slider-track-active h-[5px] absolute bg-third top-0 bottom-0 rounded-full'
                  ></div>
                  <input
                    type='range'
                    min='0'
                    max='100'
                    step='1'
                    // value={percent1}
                    className='absolute top-0 bottom-0 w-full appearance-none pointer-events-none'
                    // onChange={(e) => {
                    //   setPercent1(+e.target.value)
                    //   activeEl && setActiveEl('')
                    // }}
                  />
                  <input
                    type='range'
                    min='0'
                    max='100'
                    step='1'
                    // value={percent2}
                    className='absolute top-0 bottom-0 w-full appearance-none pointer-events-none'
                    // onChange={(e) => {
                    //   setPercent2(+e.target.value)
                    //   activeEl && setActiveEl('')
                    // }}
                  />
                  <div className='absolute w-[110%] top-[20px] flex items-center justify-between'>
                    <span
                      className='ml-6 cursor-pointer cr-hover-text-yellow'
                      // onClick={() => {
                      //   setPercent1(0)
                      //   setActiveEl('')
                      // }}
                    >
                      0
                    </span>
                    <span
                      className='cursor-pointer cr-hover-text-yellow'
                      // onClick={() => {
                      //   setPercent2(100)
                      //   setActiveEl('')
                      // }}
                    >
                      {name === 'price' ? '15 triệu +' : '90m2 +'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-3 mb-5 text-lg'>Chọn nhanh :</div>
            {
              <div className='grid grid-cols-4 gap-2 px-3 pb-5'>
                {/* {content.map((item) => (
                  <button
                    key={item.code}
                    className={`text-secondary text-center cursor-pointer font-medium transition-all duration-200 ease-linear rounded-md py-1 ${
                      activeEl === item.code ? 'bg-sixth text-white' : 'bg-[#ccc]'
                    }`}
                    onClick={() => handleActive(item.code, item.value)}
                  >
                    {item.value}
                  </button>
                ))} */}
              </div>
            }
            <button
              className='w-full py-3 mt-3 font-medium text-white uppercase transition-all duration-200 ease-linear bg-third rounded-b-md hover:font-bold hover:opacity-80'
              onClick={handleBeforeSubmit}
            >
              Áp dụng
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal

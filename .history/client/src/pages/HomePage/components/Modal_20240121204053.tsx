import { useEffect, useRef, useState } from 'react'
import { ArrMinMax, Queries, SearchItemType } from '~/types/other.type'
import { Province } from '~/types/province.type'
import icons from '~/utils/icons'
import { getNumbersArea, getNumbersPrice } from '~/utils/utils'

export interface ModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  data: unknown[]
  name: string
  title: string
  handleSubmit: (query: object, arrMinMax: ArrMinMax) => void
  queries: object
  arrMinMax: ArrMinMax
}

const { BsArrowLeftCircle } = icons

const Modal = ({ setIsShowModal, data, name, title, handleSubmit, queries, arrMinMax }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null)
  const [percent1, setPercent1] = useState(
    name === 'price' && arrMinMax?.priceArr
      ? arrMinMax?.priceArr[0]
      : name === 'area' && arrMinMax?.areaArr
        ? arrMinMax?.areaArr[0]
        : 0
  )
  const [percent2, setPercent2] = useState(
    name === 'price' && arrMinMax?.priceArr
      ? arrMinMax?.priceArr[1]
      : name === 'area' && arrMinMax?.areaArr
        ? arrMinMax?.areaArr[1]
        : 100
  )
  const [activeEl, setActiveEl] = useState('')
  // ------------------------------------------- //

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
      setIsShowModal(false)
    }
  }
  // CSS RANGE
  useEffect(() => {
    const el1 = document.querySelector('.slider-track-active') as HTMLElement
    if (el1) {
      if (percent2 <= percent1) {
        el1.style.left = `${percent2}%`
        el1.style.right = `${100 - percent1}%`
      } else {
        el1.style.left = `${percent1}%`
        el1.style.right = `${100 - percent2}%`
      }
    }
  }, [percent1, percent2])
  const handleClickTrack = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const trackEl = document.querySelector('.slider-track')
    const trackRect = (trackEl as HTMLElement).getBoundingClientRect()
    const percent = (100 * (e.clientX - trackRect.left)) / trackRect.width
    if (Math.abs(percent - percent1) < Math.abs(percent - percent2)) {
      setPercent1(percent)
    } else {
      setPercent2(percent)
    }
  }
  // 0 - 100 triệu => 0 - 15 triệu
  const convert100toTarget = (percent: number) => {
    return name === 'price'
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === 'area'
        ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
        : 0
  }
  // ACTIVE BUTTON CLICK
  const handleActive = (id: string, name: string) => {
    setActiveEl(id)
    const arrNumber = name === 'price' ? getNumbersPrice(name) : getNumbersArea(name)
    if (arrNumber.length === 1) {
      if (arrNumber[0] === 1) {
        setPercent1(0)
        setPercent2(convertto100(1))
      } else if (arrNumber[0] === 20) {
        setPercent1(0)
        setPercent2(convertto100(20))
      } else if (arrNumber[0] === 15 || arrNumber[0] === 90) {
        setPercent1(100)
        setPercent2(100)
      }
    } else if (arrNumber.length === 2) {
      setPercent1(convertto100(arrNumber[0]))
      setPercent2(convertto100(arrNumber[1]))
    }
  }
  // Click vùng giá => tự chạy vùng trên range
  const convertto100 = (percent: number) => {
    const target = name === 'price' ? 15 : name === 'area' ? 90 : 1
    return Math.floor((percent / target) * 100)
  }
  // BEFORE SUBMIT => XỬ LÝ VÀ GỌI HÀM SUBMIT
  const handleBeforeSubmit = () => {
    const min = percent1 < percent2 ? percent1 : percent2
    const max = percent1 < percent2 ? percent2 : percent1
    const arrMinMax = [convert100toTarget(min), convert100toTarget(max)]
    handleSubmit(
      {
        [`${name}Number`]: arrMinMax,
        [name]: `${
          percent1 !== percent2
            ? `Từ ${percent1 <= percent2 ? convert100toTarget(percent1) : convert100toTarget(percent2)} - ${
                percent2 >= percent1 ? convert100toTarget(percent2) : convert100toTarget(percent1)
              } ${name === 'price' ? 'triệu' : 'm2'}`
            : name === 'price'
              ? 'Trên 15 triệu'
              : 'Trên 90 m2'
        }`
      },
      {
        [`${name}Arr`]: percent1 !== percent2 ? [min, max] : [max + 1, 10000]
      }
    )
  }

  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full bg-overlay-60 text-secondary' onClick={handleClickOutside}>
      <div
        className={`overflow-auto ${
          name === 'province' ? 'h-[470px]' : 'h-auto'
        } no-scrollbar w-[35%] bg-primary bg-opacity-[85] text-white relative left-1/2 top-[10%] translate-x-[-50%] rounded-lg`}
        ref={nodeRef}
      >
        <div className='relative flex items-center p-3 border-b border-gray-200'>
          <span className='absolute cr-hover-text-yellow' onClick={() => setIsShowModal(false)}>
            <BsArrowLeftCircle size={25} className='cursor-pointer' />
          </span>
          <div className='mx-auto text-2xl font-bold'>{title}</div>
        </div>
        {/* CATEGORY / PROVINCE */}
        {(name === 'category' || name === 'province') && (
          <div className='flex flex-col gap-3 px-5 py-3'>
            <div className='flex items-center gap-3 pb-3 search-item-border'>
              <input
                type='radio'
                name={name}
                id={'default'}
                checked={!(queries as Queries)?.[`${name}Code`] ? true : false}
                onChange={() =>
                  handleSubmit(
                    {
                      [name]: name === 'category' ? 'Tất cả' : 'Toàn quốc',
                      [`${name}Code`]: null
                    },
                    {}
                  )
                }
              />
              <label htmlFor={'default'} className='text-lg cursor-pointer cr-hover-text-yellow'>
                {name === 'category' ? 'Tất cả' : 'Toàn quốc'}
              </label>
            </div>
            {name === 'category'
              ? (data as SearchItemType[]).map((item) => (
                  <div key={item.id} className='flex items-center gap-3 pb-3 search-item-border'>
                    <input
                      type='radio'
                      name={name}
                      id={item.name}
                      checked={item.name === (queries as Queries)?.[`${name}Code`] ? true : false}
                      onChange={() =>
                        handleSubmit(
                          {
                            [name]: item.name,
                            [`${name}Code`]: item.code
                          },
                          {}
                        )
                      }
                    />
                    <label htmlFor={item.name} className='text-lg cursor-pointer cr-hover-text-yellow'>
                      {item.name}
                    </label>
                  </div>
                ))
              : (data as Province[]).map((item) => (
                  <div key={item.province_id} className='flex items-center gap-3 pb-3 search-item-border'>
                    <input
                      type='radio'
                      name={name}
                      id={item.province_name}
                      checked={item.province_name === (queries as Queries)?.[`${name}Code`] ? true : false}
                      onChange={() =>
                        handleSubmit(
                          {
                            [name]: item.province_name,
                            [`${name}Code`]: item.province_id
                          },
                          {}
                        )
                      }
                    />
                    <label htmlFor={item.province_name} className='text-lg cursor-pointer cr-hover-text-yellow'>
                      {item.province_name}
                    </label>
                  </div>
                ))}
          </div>
        )}
        {/* PRICE / AREA */}
        {(name === 'price' || name === 'area') && (
          <div>
            <div>
              {/* HIỂN THỊ GIÁ TRỊ ĐƯỢC CHỌN */}
              <div className='mt-5 text-lg text-center content-price'>
                {percent1 !== percent2
                  ? `Từ
              ${percent1 <= percent2 ? convert100toTarget(percent1) : convert100toTarget(percent2)} - ${
                percent2 >= percent1 ? convert100toTarget(percent2) : convert100toTarget(percent1)
              } ${name === 'price' ? 'triệu' : 'm2'}`
                  : name === 'price'
                    ? 'Trên 15 triệu'
                    : 'Trên 90 m2'}
              </div>

              <div className='flex items-center justify-center px-3 pt-5 pb-14'>
                <div className='flex flex-col items-center justify-center relative w-[90%]'>
                  <div
                    onClick={handleClickTrack}
                    className='slider-track w-full h-[5px] absolute bg-fifth top-0 bottom-0 rounded-full'
                  ></div>
                  <div
                    onClick={handleClickTrack}
                    className='slider-track-active h-[5px] absolute bg-secondary top-0 bottom-0 rounded-full'
                  ></div>
                  <input
                    type='range'
                    min='0'
                    max='100'
                    step='1'
                    value={percent1}
                    className='absolute bottom-0 w-full appearance-none pointer-events-none top-[2px] left-[-2px]'
                    onChange={(e) => {
                      setPercent1(+e.target.value)
                      activeEl && setActiveEl('')
                    }}
                  />
                  <input
                    type='range'
                    min='0'
                    max='100'
                    step='1'
                    value={percent2}
                    className='absolute top-[2px] right-[-2px] bottom-0 w-full appearance-none pointer-events-none'
                    onChange={(e) => {
                      setPercent2(+e.target.value)
                      activeEl && setActiveEl('')
                    }}
                  />
                  <div className='absolute w-[110%] top-[20px] flex items-center justify-between'>
                    <span
                      className='ml-6 cursor-pointer cr-hover-text-yellow'
                      onClick={() => {
                        setPercent1(0)
                        setActiveEl('')
                      }}
                    >
                      0
                    </span>
                    <span
                      className='cursor-pointer cr-hover-text-yellow'
                      onClick={() => {
                        setPercent2(100)
                        setActiveEl('')
                      }}
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
                {(data as SearchItemType[]).map((item) => (
                  <button
                    key={item.id}
                    className={`text-primary text-center cursor-pointer font-medium transition-all duration-200 ease-linear rounded-md py-1 ${
                      activeEl === item.name ? 'bg-sixth text-white' : 'bg-[#ccc]'
                    }`}
                    onClick={() => handleActive(item.name, item.name)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            }

            <button
              className='w-full py-3 mt-3 font-medium text-white uppercase transition-all duration-200 ease-linear bg-secondary rounded-b-md hover:font-bold hover:opacity-80'
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

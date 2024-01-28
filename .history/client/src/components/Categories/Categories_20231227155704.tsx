import { NavLink } from 'react-router-dom'

const categories = [
  { name: 'Trang chủ', path: 'home' },
  { name: 'Cho thuê phòng trọ', path: 'cho-thue-phong-tro' },
  { name: 'Nhà cho thuê', path: 'nha-cho-thue' },
  { name: 'Cho thuê căn hộ', path: 'cho-thue-can-ho' },
  { name: 'Cho thuê mặt bằng', path: 'cho-thue-mat-bang ' }
]
const notActive = 'hover:bg-secondary px-4 h-full flex items-center bg-primary transition-all ease-linear duration-300'
const active = 'hover:bg-secondary px-4 h-full flex items-center bg-primary'
const Navigation = () => {
  return (
    <div className='w-full text-white h-[40px] bg-primary flex justify-center items-center'>
      <div className='w-[75%] flex items-center h-full'>
        {/* <NavLink to={'/'} className={({ isActive }) => (isActive ? active : notActive)}>
          Trang chủ
        </NavLink> */}
        {categories?.length > 0 &&
          categories.map((item, index) => {
            return (
              <div key={index} className='h-full'>
                <NavLink to={''} className={({ isActive }) => (isActive ? active : notActive)}>
                  {item.name}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigation

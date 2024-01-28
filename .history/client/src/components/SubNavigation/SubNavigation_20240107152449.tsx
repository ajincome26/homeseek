import { NavLink } from 'react-router-dom'
import { categories } from '~/constants/data'

const notActive = 'hover:bg-primary px-4 h-full flex items-center bg-primary transition-all ease-linear duration-300'
const active = 'hover:bg-third px-4 h-full flex items-center bg-primary'
const SubNavigation = () => {
  return (
    <div className='w-full h-[40px] flex justify-center items-center'>
      <div className='w-[80%] flex items-center h-full'>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? active : notActive)}>
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item, index) => {
            return (
              <div key={index} className='h-full'>
                <NavLink
                  // to={`/${formatVietnameseToString(item.value)}`}
                  to=''
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SubNavigation

import { Link } from 'react-router-dom'
import dataFooter from '~/utils/dataFooter'

const { footerTakeCare, footerAboutShopee, footerPay, footerExpress, footerSocial, footerApp } = dataFooter

const Footer = () => {
  return (
    <div className='py-4 bg-grayField text-secondary'>
      <footer className='container'>
        <div className='grid grid-cols-1 gap-5 py-8 text-center md:grid-cols-3 lg:grid-cols-5'>
          <div>
            <h3 className='mb-3 font-semibold uppercase md:text-start'>Chăm sóc khách hàng</h3>
            {footerTakeCare.map(({ id, text }) => (
              <div key={id} className='text-sm md:text-start'>
                {text}
              </div>
            ))}
          </div>

          <div>
            <h3 className='mb-3 font-semibold uppercase md:text-start'>Về Shopee Color</h3>
            {footerAboutShopee.map(({ id, text }) => (
              <div key={id} className='text-sm md:text-start'>
                {text}
              </div>
            ))}
          </div>

          <div>
            <h3 className='mb-3 font-semibold uppercase'>Thanh toán</h3>
            <div className='grid grid-cols-2 gap-2 w-[70%] sm:w-full sm:grid-cols-3 mx-auto'>
              {footerPay.map(({ id, text }) => (
                <div key={id} className='w-full h-full p-2 bg-white rounded shadow-lg'>
                  <img key={id} src={text} alt={`pay ${id}`} className='object-contain w-full h-full' />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3 font-semibold uppercase'>Đơn vị vận chuyển</h3>
            <div className='grid grid-cols-2 gap-2 w-[70%] sm:w-full sm:grid-cols-3 mx-auto'>
              {footerExpress.map(({ id, text }) => (
                <div key={id} className='w-full h-full p-2 bg-white rounded shadow-lg'>
                  <img key={id} src={text} alt={`pay ${id}`} className='object-contain w-full h-full' />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-3 font-semibold uppercase'>Tải ứng dụng Shopee Color ngay thôi nào</h3>
            <div className='flex items-center justify-center gap-3'>
              <Link to='https://shopee.vn/web' className='p-2 bg-white rounded'>
                <img src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472' alt='qr-code' />
              </Link>
              <div className='flex flex-col gap-[6px]'>
                {footerApp.map(({ id, text }) => (
                  <div key={id} className='w-full h-full p-[6px] bg-white shadow-lg rounded'>
                    <img key={id} src={text} alt={`pay ${id}`} className='object-contain w-full h-full' />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className='mb-3 font-semibold uppercase md:text-start'>Theo dõi chúng tôi trên</h3>
            <div className='flex items-center justify-center gap-3 md:items-start md:flex-col'>
              {footerSocial.map(({ id, text, icon: Icon, link }) => (
                <Link to={link} key={id} className='flex items-center gap-2'>
                  <Icon />
                  <div className='text-sm transition hover:text-primary'>{text}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full h-[1px] bg-grayBox'></div>

        <div className='py-5 text-center'>
          <h3 className='font-medium'>Công ty TNHH Shopee Color</h3>
          <div className='flex flex-col gap-2 mt-3 text-sm'>
            <p>
              Địa chỉ: Tầng 3-4-5, Tòa nhà King Power, số 8 đường Xã Đàn, Phường Kim Liên, Quận Đống Đa, Thành phố Hà
              Nội, Việt Nam. Tổng đài hỗ trợ: 19001900 - Email: cskh@hotro.shopeecolor.vn
            </p>
            <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Văn Tú - Điện thoại liên hệ: 0866516936</p>
            <p>Mã số doanh nghiệp: 0123456789 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 26/06/2000</p>
            <p>© 2000 - Bản quyền thuộc về Công ty TNHH Shopee Color</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

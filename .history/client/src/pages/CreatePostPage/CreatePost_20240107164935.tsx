const CreatePost = () => {
  return (
    <div className='p-5 text-black'>
      <h2 className='w-full pb-5 text-3xl font-medium border-b-2'>Đăng tin mới</h2>
      <div className='flex gap-5 mt-10'>
        <div className='flex flex-col gap-10 basis-[60%]'>
          <Address
            invalidFields={invalidFields}
            payload={payload}
            setPayload={setPayload}
            setInvalidFields={setInvalidFields}
          />
          <Overview
            invalidFields={invalidFields}
            payload={payload}
            setPayload={setPayload}
            setInvalidFields={setInvalidFields}
          />
          <div>
            <h2 className='text-2xl font-semibold'>Hình ảnh</h2>
            <p className='my-5'>Upload ảnh tại đây</p>
            <input type='file' id='file' hidden multiple onChange={handleFiles} />
            <label
              className='w-full h-[200px] flex items-center justify-center border-[2px] border-dashed border-red-400 cursor-pointer'
              htmlFor='file'
              title='upload'
            >
              {isLoading ? <Loading /> : <MdDriveFolderUpload fontSize={70} color='#fdc318' />}
            </label>
            <small className='text-red-500'>
              {invalidFields?.some((item) => item.name === 'images') &&
                invalidFields?.find((item) => item.name === 'images')?.message}
            </small>
          </div>
          <div className='w-full'>
            <h3 className='inline-block px-4 py-2 text-white bg-green-400'>Preview</h3>
            <div className='flex flex-wrap w-full mb-10'>
              {imagesPreview?.map((item, index) => (
                <div className='relative w-1/3 border border-white h-[250px]' key={index}>
                  <img src={item} alt='preview' className='object-cover w-full h-full' />
                  <span
                    title='delete'
                    className='absolute p-2 bg-red-500 rounded-full cursor-pointer top-2 right-2 hover:bg-red-400 cr-transition'
                    onClick={() => handleDeleteImage(item)}
                  >
                    <RiDeleteBin2Fill fontSize={20} color='white' />
                  </span>
                </div>
              ))}
            </div>
            <Button
              text='Tiếp Tục'
              textColor='text-white'
              bgColor='bg-secondary'
              hover
              fullWidth
              onClick={handleSubmit}
            />
          </div>
        </div>
        <div className='border border-red-300 map basis-[40%]'>MAP</div>
      </div>
    </div>
  )
}

export default CreatePost

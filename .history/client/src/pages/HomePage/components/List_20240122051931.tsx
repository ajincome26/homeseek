const List = () => {
  // useEffect(() => {
  //   const params = []
  //   for (let entry of searchParams.entries()) {
  //     params.push(entry)
  //   }
  //   let searchParamsObject = {}
  //   params.forEach((i) => {
  //     if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
  //       searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
  //     } else searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
  //   })
  //   if (categoryCode) searchParamsObject.categoryCode = categoryCode
  //   dispatch(getPostsLimit(searchParamsObject))
  // }, [searchParams])
  return (
    <div className='border border-[#ccc] p-3 text-secondary rounded-md shadow-md'>
      <div className='flex items-center justify-between'>
        <h1 className='mb-3 text-lg font-bold'>Danh sách tin đăng</h1>
        <span>Cập nhật : 21:30 09/02/2023</span>
      </div>
      <div className='flex items-center gap-3'>
        <span>Sắp xếp:</span>
        <Button text='Mặc định' textColor='text-secondary' bgColor='bg-[#ccc]' padding='px-[10px] py-[3px]' hover />
        <Button text='Mới nhất' textColor='text-secondary' bgColor='bg-[#ccc]' padding='px-[10px] py-[3px]' hover />
      </div>
      <div className='posts'>
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <PostItem
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default List

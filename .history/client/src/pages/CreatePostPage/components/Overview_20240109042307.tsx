const Overview = () => {
  return (
    <div>
      <h1 className='mb-5 text-2xl font-semibold'>Địa chỉ cho thuê</h1>
      <div className='flex gap-10 mb-5'>
        <Select
          type='province'
          label='Tỉnh/Thành phố'
          optionTitle='--Chọn Tỉnh/TP--'
          provinces={provinces}
          value={province}
          setValue={setProvince}
        />

    </div>
  );
};

export default Overview;
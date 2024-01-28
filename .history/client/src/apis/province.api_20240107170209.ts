const provinceApi = {
  register: () => `https://vapi.vnappmob.com/api/province/`,
  getProvince: (params: ProductListParams) =>
    instance.get<ResponseSuccess<ProductList>>('/products', {
      params
    })
}

export default provinceApi

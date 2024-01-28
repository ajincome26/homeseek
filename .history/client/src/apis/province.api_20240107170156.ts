const provinceApi = {
  register: (body: {
    name: string
    email: string
    phone_number: string
    password: string
    confirm_password: string
  }) => (`https://vapi.vnappmob.com/api/province/`, body),
  getProvince: (params: ProductListParams) =>
    instance.get<ResponseSuccess<ProductList>>('/products', {
      params
    })
}

export default provinceApi

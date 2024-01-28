import axiosDefault from 'axios'

export const apiGetPublicProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosDefault({
        method: 'get',
        url: 'https://vapi.vnappmob.com/api/province/'
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

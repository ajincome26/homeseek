import axiosDefault from 'axios'

export const apiGetPublicProvinces = () =>
  // eslint-disable-next-line no-async-promise-executor
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

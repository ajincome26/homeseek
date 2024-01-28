import { path } from '~/constants/path'
import { FormPost } from '~/pages/CreatePostPage/CreatePost'
import instance from '~/utils/instance'

const postApi = {
  uploadImages: (files: FormData) =>
    instance.post(`medias${path.UPLOAD_IMAGE}`, files, {
      headers: {
        'Content-Type': 'multipart/form-data' // Bắt buộc, research mãi mới fix được =))
      }
    }),
  createPost: (body: FormPost) => instance.post('/posts', body)
}

export default postApi

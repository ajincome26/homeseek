import { Request } from 'express'
import sharp from 'sharp'
import { UPLOAD_IMAGE_TEMP_DIR } from '~/constants/dir'
import { handleUploadImage, handleUploadVideo } from '~/utils/file'
import fsPromise from 'fs/promises'
import { isProduction } from '~/constants/config'
import { config } from 'dotenv'
import { MediaType } from '~/constants/enums'
import { Media } from '~/models/Orther'
config()

class MediasService {
  async uploadImage(req: Request) {
    const files = await handleUploadImage(req)
    const result: Media[] = await Promise.all(
      files.map(async (file) => {
        const newName = `${file.newFilename.split('.')[0]}.jpg` // tên file được upload lên folder uploads
        const newPath = UPLOAD_IMAGE_TEMP_DIR + '/' + newName // path tới file lưu tạm trong temp
        await sharp(file.filepath).jpeg().toFile(newPath) // chuyển đổi file chính sang .jpg và lưu ở temp
        await fsPromise.unlink(newPath) // xóa file ở temp
        return {
          url: isProduction
            ? `${process.env.HOST}/static/image/${newName}`
            : `http://localhost:${process.env.PORT}/static/image/${newName}`,
          type: MediaType.Image
        }
      })
    )
    return result
  }
  async uploadVideo(req: Request) {
    const files = await handleUploadVideo(req)
    const result: Media[] = files.map((file) => {
      return {
        url: isProduction
          ? `${process.env.HOST}/static/video/${file.newFilename}`
          : `http://localhost:${process.env.PORT}/static/video/${file.newFilename}`,
        type: MediaType.Video
      }
    })
    return result
  }
}

const mediasService = new MediasService()
export default mediasService

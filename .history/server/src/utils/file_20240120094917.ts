import { UPLOAD_IMAGE_DIR, UPLOAD_IMAGE_TEMP_DIR, UPLOAD_VIDEO_DIR, UPLOAD_VIDEO_TEMP_DIR } from '~/constants/dir'
import fs from 'fs'
import formidable, { File } from 'formidable'
import { Request } from 'express'

export const initFolder = () => {
  ;[UPLOAD_IMAGE_TEMP_DIR, UPLOAD_VIDEO_TEMP_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true // mục đích là để tạo folder nested
      })
    }
  })
}

export const handleUploadImage = async (req: Request) => {
  const form = formidable({
    uploadDir: UPLOAD_IMAGE_DIR,
    maxFiles: 4,
    keepExtensions: true,
    maxFileSize: 1000 * 1024,
    maxTotalFileSize: 1000 * 1024 * 4,
    filter: function ({ name, originalFilename, mimetype }) {
      const valid = name === 'image' && Boolean(mimetype?.includes('image/'))
      if (!valid) {
        form.emit('error' as any, new Error('File type is not valid') as any)
      }
      return valid
    }
  })
  return new Promise<File[]>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err)
      }
      // eslint-disable-next-line no-extra-boolean-cast
      if (!Boolean(files.image)) {
        return reject(new Error('File is empty'))
      }
      resolve(files.image as File[])
    })
  })
}
export const handleUploadVideo = async (req: Request) => {
  const form = formidable({
    uploadDir: UPLOAD_VIDEO_DIR,
    maxFiles: 1,
    maxFileSize: 50 * 1024 * 1024, // 50MB
    filter: function ({ name, originalFilename, mimetype }) {
      const valid = name === 'video' && Boolean(mimetype?.includes('mp4') || mimetype?.includes('quicktime'))
      if (!valid) {
        form.emit('error' as any, new Error('File type is not valid') as any)
      }
      return valid
    }
  })
  return new Promise<File[]>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err)
      }
      // eslint-disable-next-line no-extra-boolean-cast
      if (!Boolean(files.video)) {
        return reject(new Error('File is empty'))
      }
      // Đoạn này tự handle thay cho việc dùng keepExtensions, ta sẽ tự nối đuôi mở rộng của video (VD: mp4) vào
      const videos = files.video as File[] // mảng các video, ta vẫn sẽ làm trường hợp nhiều video nhỡ sau này
      videos.forEach((video) => {
        const name = video.originalFilename as string
        const extension = name.split('.')[name.split('.').length - 1] // đuôi mở rộng
        fs.renameSync(video.filepath, video.filepath + '.' + extension)
        video.newFilename = video.newFilename + '.' + extension
      })
      resolve(videos)
    })
  })
}

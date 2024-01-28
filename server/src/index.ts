import express from 'express'
import { defaultErrorHandler } from './middlewares/errror.middleware'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import cors from 'cors'
import postsRouter from './routes/post.routes'
import mediasRouter from './routes/medias.routes'
import { initFolder } from './utils/file'
import { UPLOAD_VIDEO_DIR } from './constants/dir'
import staticRouter from './routes/static.routes'

const app = express()
const PORT = process.env.PORT || 4000

// Tạo folder upload
initFolder()

databaseService.connect()

app.use(cors())

app.use(express.json())

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/posts', postsRouter)
app.use('/static', staticRouter)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))

// Default Error Handler
app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
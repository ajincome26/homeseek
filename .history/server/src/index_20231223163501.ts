import { config } from 'dotenv'
import express from 'express'
import usersRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
import { UPLOAD_VIDEO_DIR } from './constants/dir'
import { defaultErrorHandler } from './middlewares/errror.middleware'
import mediasRouter from './routes/medias.routes'
import staticRouter from './routes/static.routes'
import { initFolder } from './utils/file'
config()

const app = express()
const PORT = process.env.PORT || 4000

// Tạo folder upload
initFolder()

databaseService.connect().then(() => {
  databaseService.indexUsers()
  databaseService.indexRefreshTokens()
  databaseService.indexFollowers()
})
app.use(express.json())

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/static', staticRouter)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))

app.use(defaultErrorHandler)
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})

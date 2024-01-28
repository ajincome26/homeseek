import express from 'express'
import { defaultErrorHandler } from './middlewares/errror.middleware'
import databaseService from './services/database.services'

const app = express()
const PORT = process.env.PORT || 4000

databaseService.connect()

app.use(express.json())

app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})

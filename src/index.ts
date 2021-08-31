import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import router from './routes'
dotenv.config()

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info(`┌───────────────────────────────────┐`)
  console.info(`│                                   │`)
  console.info(`│  Server is running on port \x1b[32m${PORT}\x1b[0m   │`)
  console.info(`│                                   │`)
  console.info(`└───────────────────────────────────┘`)
})

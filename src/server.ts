import express from 'express'
import { sampleRoutes } from './interfaces/sampleRoutes'
import { userRoutes } from './interfaces/userRoutes'


const app = express()

app.use(express.json())


app.use('/', sampleRoutes)
app.use('/users', userRoutes)

app.listen(3333, () => "server running on port 3333")
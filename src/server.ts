import express from 'express'
import { sampleRoutes } from './interfaces/sampleRoutes'


const app = express()

app.use(express.json())


app.use('/', sampleRoutes)

app.listen(3333, () => "server running on port 3333")
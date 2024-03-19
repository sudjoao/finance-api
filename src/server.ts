import express from 'express'
import { sampleRoutes } from './interfaces/sampleRoutes'
import { userRoutes } from './interfaces/userRoutes'
import { categoryRoutes } from './interfaces/categoryRoutes'


const app = express()

app.use(express.json())


app.use('/', sampleRoutes)
app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)

app.listen(3333, () => "server running on port 3333")
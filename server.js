import express from 'express'
import menuRoutes from './modules/menu/menu.routes.js'

const app = express()
app.use(express.json())

app.use('/api', menuRoutes)

app.listen(5000, () => {
  console.log('Server jalan di http://localhost:5000')
})
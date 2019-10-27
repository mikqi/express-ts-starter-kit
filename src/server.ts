import express from 'express'
import path from 'path'

require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 1234

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('home/index', {
    pageName: 'home'
  })
})
app.get('/about', (req, res) => {
  res.render('about/index', {
    pageName: 'about'
  })
})

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}`)
})

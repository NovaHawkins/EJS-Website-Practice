const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public/images'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('main', {text: 'This is EJS'})
})

app.get('/menu', (req, res) => {
    res.render('menu', {text: 'This is EJS'})
})

app.listen(port, () => {
    console.log('Server/app is running at port', port)
})
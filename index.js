const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3777

//Set the view engine to ejs
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(bodyParser.json()) //To support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) //To support URL-encoded bodies
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, (err) => {
  if (err) return console.log('Error', err)

  console.log(`Server is listening on ${port}`)
})
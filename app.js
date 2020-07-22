const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const gnerateRubbish = require('./generate_rubbish')
const app = express()
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting helper
handlebars.registerHelper('if_option', function (job, postion, options) {
  if (job === postion) {
    return options.fn(this);
  }
  return options.inverse(this);
});


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.target
  const rubbish = gnerateRubbish(req.body)
  res.render('index', { rubbish: rubbish, job: job })
})

app.listen(port, () => {
  console.log(`Listening on the localhost:${port}`)
})
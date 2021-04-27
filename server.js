const express = require('express')
const app = express()

app.use(express.static('./dist/portafolio-web'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'/dist/portafolio-web/index.html'));
})
 
app.listen(3000)
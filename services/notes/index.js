const express = require('express')
const bodyParser = require('body-parser')  
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
mongoose.connect('mongodb://' + "satya" + ':' + "satya123" + "@ec2-34-227-248-48.compute-1.amazonaws.com" + ':27017/cloud', { useUnifiedTopology: true,  useNewUrlParser: true })
app.use(bodyParser.json())
app.use(express.static(__dirname = "./public"))
app.use(cors())
app.use('/', require('./routes/notes.route'))

const port = 8000 | process.env.PORT

app.listen(port)
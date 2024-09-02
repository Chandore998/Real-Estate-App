const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const cors = require("cors")
const bodyparser = require('body-parser')

app.use(bodyparser.json())



app.use(cors())

app.use(bodyparser.urlencoded({ extended : true })); 


app.listen(3000)

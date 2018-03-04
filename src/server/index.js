// @flow
//MODULES
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import compression from 'compression'
import {
  LOG_MODE,
  APP_PORT
} from './config'
 
//FIRST_CONFIG
const app = express()
const port = process.env.PORT || 3000

//CONFIG
if (process.env.NODE_ENV === 'production') {
  app.use(function(req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
          return res.redirect(['https://', req.get('Host'), req.url].join(''));
      }
      return next();
  });
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method === 'OPTIONS') res.sendStatus(200)
  else next()
})
app.use(morgan(LOG_MODE))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//COMPRESSION
app.use(compression())

if (process.env.NODE_ENV === 'development') {
  //STATIC
  app.use(express.static(path.resolve('./public')))

  //REACT
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'))
  })
} else {
  // set directory relative to the server location
  //STATIC
  app.use(express.static(path.resolve(__dirname, './public')))

  //REACT
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
  })
}

//ERROR_HANDLER
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  
  res.status(err.status || 500)
  res.json({error: err.message})
})

//LISTEN TO PORT
app.listen(port, () => console.log(`Server running at port ${port}`))
const express = require("express");
const app = express();
const tasks = require('./routes/tasksRouter')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errHandlerMiddleware = require('./middleware/error-handler')

//middleware
// app.use(express.static()) for serving static files
app.use(express.json());

// routes
app.get('/', (req,res) =>{
  res.send('Hello from NODE JS');
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errHandlerMiddleware)

const port = process.env.PORT ||4000
const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server listening on port ${port}`));
  } catch(error){
    console.log(error)
  } 
}

start();
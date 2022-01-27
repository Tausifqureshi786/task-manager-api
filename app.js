const express = require("express");

const app = express();
const tasks = require('./routes/tasks')
 
app.get('/', (req,res) =>{
  res.send('Hello from NODE JS');
})

app.use('/api/v1/tasks', tasks)

app.listen(4000, console.log(`server listening on port 4000`));
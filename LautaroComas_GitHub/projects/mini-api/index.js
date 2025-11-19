const express = require('express');
const app = express();
app.use(express.json());

let data = [{id:1, name:'Sample item'}];

app.get('/api/items', (req,res)=> res.json(data));
app.post('/api/items', (req,res)=> {
  const item = {id: Date.now(), ...req.body};
  data.push(item);
  res.status(201).json(item);
});

app.listen(3000, ()=> console.log('API listening on http://localhost:3000'));

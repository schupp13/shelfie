const express = require('express');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
const {SERVER_PORT} = process.env;
const {CONNECTION_STRING} = process.env;
app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance =>{
  app.set('db', dbInstance);
  console.log('connected');
}).catch((e)=>console.log(e));


//end points
app.get('/api/inventory', controller.getInventory);
app.post('/api/product', controller.postProduct);
app.delete('api/product:id', controller.deleteProduct);



app.listen(SERVER_PORT, ()=>{console.log(`listening on port ${SERVER_PORT}`)});
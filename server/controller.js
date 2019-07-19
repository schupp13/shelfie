

// addProduct = (req, res)=>{
//   const {url, name, price} = req.body;
//   const db = req.app.get('db');
//   db.addProduct(url, name, price).then(()=>{
//     res.sendStatus(200);
//   }).catch(() =>{
//     res.sendStatus(500)
//   })
// }


getInventory = (req, res)=>{
  const db = req.app.get('db');
  db.get_inventory().then((products)=>{
    res.json(products)
  }) 
}

postProduct = (req, res) =>{
  const db = req.app.get('db');
  let {name, price, url} =req.body;

  db.create_product(name,price,url).then((results) =>{
    res.sendStatus(200);
  })
 
}
deleteProduct = (req, res, next)=>{
  const dbInstance = req.app.get('db');
  const { id } = req.params;

dbInstance.delete_product(id)
.then(() =>{res.sendStatus(200)})
.catch((error)=>{
  res.status(500)
  .send({errorMessage: "Oops, something went wrong! A group of highly trained monkeys have been dispatched to fix the issue."}); 
  console.log(error)
})
}


module.exports = {
  getInventory,
  postProduct,
  deleteProduct
}
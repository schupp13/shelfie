import React,{Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product'
class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  removeProduct=(id)=>{
    axios
    .delete(`api/product/${id}`).then( response =>{
      this.props.getProducts();
    });
  }

  render(){
   let {inventory} = this.props;
   let displayInventory = inventory.map((product)=>{
      return <Product url={product.url} name={product.name} price={product.price} removeProduct={this.removeProduct}/>
   })
   
  //  let displayInventory = inventory.map((product)=>{
  //  return(<article>
  //   <img src={product.url}></img>
  //   <h1>{product.name}</h1>
  //   <h1>{product.price}</h1>
  //   </article>)
  //   }
  
    return(
      <div>
        <h1>Dashboard Componenet</h1>
        {displayInventory}
        
      </div>
    )
  }
}

export default Dashboard;
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Axios from 'axios';






class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      // inventory: [
      //   { url: 'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/6a8f277daf5f4748a739a998016785f4_9366/Asweerun_Shoes_White_F36340_01_standard.jpg',
      //     name: 'Shoes',
      //     price: 99},
      //     { url: 'https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$pdp-image$',
      //     name: 'Shoes2',
      //     price: 59},
      //     { url: 'https://s7d9.scene7.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg',
      //     name: 'Shoes3',
      //     price: 99},],

      inventory : [],
    }
    this.getProducts = this.getProducts.bind(this)
    }
getProducts(){
Axios.get('/api/inventory').then(response =>{
  console.log(response);
  this.setState({inventory: response.data})
}).catch(error =>{
  console.log(error)
})
}

componentDidMount(){
  this.getProducts();
}
  

  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard getProducts={this.getProducts} inventory={this.state.inventory}/>
        <Form getProducts={this.getProducts}/>
      </div>
    );
  }
  
}

export default App;

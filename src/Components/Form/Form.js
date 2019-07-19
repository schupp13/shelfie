import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state ={
      image: 'https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png',
      name: '',
      price: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.clearEverything = this.clearEverything.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit =(e) =>{
    e.preventDefault();
    
    let {getProducts} = this.props;
    let {image, name, price} = this.state;
    axios.post('/api/product',{name:name, price: price,url:image}).then(response=>{
      // console.log(response);
      getProducts();
      this.clearEverything();
    }).catch((e)=>{
      console.log(e);
    })
  }



   clearEverything (){
    this.setState({
      image: 'https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png',
      name: '',
      price: ''
    });
  }


  render(){
console.log(this.state)
    return(
      <section className="formSection">
        <h1>Form</h1>
        <img className="formImage" src={this.state.image}></img>
        <form onSubmit={this.handleSubmit}className="productForm">
          <label>Product URL</label>
          <input onChange={(e)=>{this.handleChange(e)}} name='image' type='text'vlaue={this.state.image}></input>
          <label> Name</label>
          <input onChange={(e)=>{this.handleChange(e)}} name='name' type='tex' vlaue={this.state.name}></input>
          <label>Product Price</label>
          <input onChange={(e)=>{this.handleChange(e)}}name='price' type='text'vlaue={this.state.price}></input>
          <button type="submit"onClick={this.handleSubmit}>Add to Inventory</button>
          <button onClick={this.clearEverything} >Cancel</button>
        </form>
      </section>
    )
  }
}

export default Form;
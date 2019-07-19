import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component{
  constructor(props){
    super(props);
  }

  render(){

    let {url, name, price} = this.props;
    return (
      <div>
        <h1>Products Component</h1>
        <article>
        <img src={url}></img>
        <h1>{name}</h1>
      <h1>{price}</h1>
    <button onClick={this.props.removeProduct}>Delete</button>
     </article>
      </div>
    )
  }
}

export default Product;
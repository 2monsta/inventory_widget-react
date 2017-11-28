import React, {Component} from 'react';
// var product = require("./product");
import product from './product';
import ProductItem from "./ProductItem";

class Inventory extends Component{
	constructor(){
		super();
		this.product = product;
	}
	render(){
		// console.log(this.product);
		var category = this.product.data.map((categoryStuff, index)=>{
			console.log(categoryStuff.name);
			return (
				<ProductItem nameOf={categoryStuff.name} priceOf={categoryStuff.price}/>
			);
		});
		console.log(category);
		return (
			<div>
				{category}
			</div>
		)
	}
}

export default Inventory;
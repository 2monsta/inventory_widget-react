import React, {Component} from 'react';
// var product = require("./product");
import product from './product';
// import ProductItem from "./ProductItem";
import Category from './Category';

class Inventory extends Component{
	constructor(){
		super();
		this.product = product;
	}
	render(){
		// console.log(this.product);
		var names = [];
		this.product.data.map(function(obj) {
				if (names.indexOf(obj.category) === -1){
					names.push(obj.category);
				}
		});
		// console.log(names);
		var categoryName = names.map((data)=>{
			return (
				<Category name ={data}/>
			)
		})
		// console.log(categoryName);
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				{categoryName}
			</table>
		)
	}
}

export default Inventory;
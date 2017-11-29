import React, {Component} from 'react';
import product from './product';
import ProductItem from './ProductItem';

class Category extends Component{
	constructor(){
		super();
		this.product = product.data;
	}

	render(){
		var arr = [];
		for(let i=0; i<this.product.length; i++){
			if(this.product[i].category === this.props.name){
				arr.push(<ProductItem nameOf={this.product[i].name} priceOf={this.product[i].price} />);
			}
		}
		return(
			<tbody>
				<tr>
					<td>
						{this.props.name}
					</td>
				</tr>
				{arr}
			</tbody>
		)
	}
}

export default Category
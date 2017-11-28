import React, {Component} from 'react';

class ProdcutItem extends Component{
	render(){
		console.log(this.props.name);
		return(
			<div>
				<p>{this.props.nameOf}</p>
				<p>{this.props.priceOf}</p>
			</div>
		)
	}
}

export default ProdcutItem;
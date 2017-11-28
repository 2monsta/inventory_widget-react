import React, {Component} from 'react';

class ProdcutItem extends Component{
	render(){
		console.log(this.props.name);
		return(
			<tr>
				<td>
					{this.props.nameOf}
				</td>
				<td>
					{this.props.priceOf}
				</td>
			</tr>
		)
	}
}

export default ProdcutItem;
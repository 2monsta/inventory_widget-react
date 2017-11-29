import SearchBar from './SearchBar';
import React, { Component } from 'react';
import Inventory from './Inventory';

class Body extends Component{
	constructor(){
		super();
		this.state={
			list: <Inventory />
		}
	}
	handleSubmit(newValue){
		
		console.log(newValue);
	}
	render(){
		return(
			<div className="row">
				<div className="col-sm-12">
						<SearchBar onSubmit={this.handleSubmit}/>
				</div>
				<div className="col-sm-12">
					{this.state.list}
				</div>
			</div>
		)
	}
}
export default Body
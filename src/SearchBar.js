import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="col-sm-4">
				<form onSubmit={this.handleSubmit}>
					<input className="form-control" id="searchTerm" type="text" placeholder="Search..."/>
						<input type="checkbox" id="check"/>
						<label htmlFor="check">Only show product in stock</label>
				</form>
			</div>
		)
	}
}

export default SearchBar;
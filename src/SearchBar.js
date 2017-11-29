import React, {Component} from 'react';

class SearchBar extends Component{
	render(){
		return(
			<div className="col-sm-4">
				<input className="form-control" id="searchTerm" type="text" placeholder="Search..."/>
				<input type="checkbox" id="check"/>
				<label htmlFor="check">Only show product in stock</label>
			</div>
		)
	}
}

export default SearchBar;
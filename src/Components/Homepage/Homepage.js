import React, { Component } from 'react';
import OptionsRow from "./OptionsRow/OptionsRow";
import './Homepage.css';

class Homepage extends Component{
	render(){
		return(
			<div className="Homepage">
				<OptionsRow />
			</div>
		);
	}
}

export default Homepage;
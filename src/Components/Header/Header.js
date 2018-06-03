//This page renders the header of the site

import React, { Component } from 'react';
import TopRow from "./TopRow/TopRow";
import SecondRow from "./SecondRow/SecondRow";
import './Header.css';

class Header extends Component{
	render(){
		return(
			<div className="Header">
				<TopRow />
				<SecondRow />
			</div>
		);
	}
}

export default Header;
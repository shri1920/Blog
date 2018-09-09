import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Header.css";

class Header extends Component {
	render () {
		return (<div className="Header">
			<div className="Header_Main">
				<Link to="/home"> React router example </Link>
			</div>
			<div className="Header_Nav">
				<Link to="/home"> <span>Home</span> </Link>
				<Link to="/blog"> <span>Blog</span> </Link>
				<Link to="/aboutus"> <span>About us</span> </Link>
			</div>
		</div>);
  	}
}

export default Header;
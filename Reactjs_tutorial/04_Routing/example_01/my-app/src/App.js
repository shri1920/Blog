import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Header from "./component/Header/Header"; // Importing the Header component
import Home from "./component/Home/Home";
import Blog from "./component/Blog/Blog";
import AboutUs from "./component/AboutUs/AboutUs";

// App Component
class App extends Component {
	render () {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/blog" component={Blog} />
						<Route path="/aboutus" component={AboutUs} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</div>
			</Router>
		);
  	}
}

export default App;

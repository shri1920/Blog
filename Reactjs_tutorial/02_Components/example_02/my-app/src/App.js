import React, { Component } from "react";
import Header from "./component/Header/Header"; // Importing the Header component
import Footer from "./component/Footer/Footer"; // Importing the Footer component

// App Component
class App extends Component {
	render () {
		return (
			<div>
				<Header />
					<div>Content</div>
				<Footer />
			</div>
		);
  	}
}

export default App;

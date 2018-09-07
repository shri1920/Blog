import React, { Component } from "react";

// Header Component
class Header extends Component {
	render () {
		return (<div>
			Header Component
		</div>);
  	}
}

// Footer Component
class Footer extends Component {
	render () {
		return (<div>
			Footer Component
		</div>);
  	}
}

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

### Stateless Components.

Below code snippet shows how to create a component in React.js
````
// Header Component
class Header extends Component {
	render () {
		return (<div>
			Header Component
		</div>);
  	}
}
````
The above code snippet shows how to create a component with name Header. example_01 demonstrate the same.

example_02 demonstrate splitting up the components.

Outsource the Header component to Header.js and Footer component to Footer.js

Now to use the Header and Footer component in App.js, import the component in App.js from Header.js and Footer.js

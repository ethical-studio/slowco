import type { Component } from "solid-js";
import PersonSimpleItem from "./components/Person/Simple/Item";
import View from "./providers/Theme";

const App: Component = () => {
	return (
		<View>
			<PersonSimpleItem
				avatar="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3332&q=80"
				title="Miroslav Vršecký"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
			/>
		</View>
	);
};

export default App;

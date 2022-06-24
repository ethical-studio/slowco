import type { Component } from "solid-js";
import { RouterProvider } from "providers/Router";
import routes from "./routes";

const App: Component = () => {
	return (
		<RouterProvider routes={routes} />
	);
};

export default App;

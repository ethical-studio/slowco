import type { Component } from "solid-js";
import { RouterProvider } from "providers/Router";
import { ThemeProvider } from "providers/Theme";
import routes from "./routes";

const App: Component = () => {
	return (
		<ThemeProvider>
			<RouterProvider routes={routes} />
		</ThemeProvider>
	);
};

export default App;

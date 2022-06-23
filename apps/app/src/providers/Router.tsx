import { Component, Switch } from "solid-js";
import { ThemeProvider } from "./Theme";

type RouterComponent = Component<{}>;

export const RouterProvider: RouterComponent = (_) => {
	return (
		<ThemeProvider>
			<Switch>

			</Switch>
		</ThemeProvider>
	);
};

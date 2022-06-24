import { ThemeProvider } from "./Theme";
import { Component } from "solid-js";
import { Routes } from "types/router";

type RouterProvider = Component<{
	routes: Routes;
}>;

export const RouterProvider: RouterProvider = (_) => {
	return (
		<ThemeProvider>
		</ThemeProvider>
	);
};

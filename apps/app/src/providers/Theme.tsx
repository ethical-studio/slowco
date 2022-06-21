import { initialThemeValue, theme } from "../stores/themeStore";
import { createGlobalStyles, ThemeProvider } from "solid-styled-components";
import { Component, JSX } from "solid-js";

const GlobalStyles = createGlobalStyles({
	"html, body": {
		maxWidth: "100vw",
		minHeight: "100vh",
		fontFamily: initialThemeValue.fontFamily.text
	},
	"*": {
		padding: 0,
		margin: 0,
		border: "none",
		outline: "none",
		boxSizing: "border-box"
	}
});

type ThemeComponent = Component<{
	children: JSX.Element;
}>;

const Theme: ThemeComponent = (props) => {
	return (
		<ThemeProvider theme={theme()}>
			<GlobalStyles />
			{props.children}
		</ThemeProvider>
	);
};

export default Theme;

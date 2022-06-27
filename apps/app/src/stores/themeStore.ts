import { createSignal } from "solid-js";
import { DefaultTheme } from "solid-styled-components";
import { px } from "utils/css";

export const initialThemeValue = {
	fontFamily: {
		display: `"-apple-system-headline", "SF Pro Display", "Neue Haas Grotesk Display", "BlinkMacSystemFont", "-apple-system", "San Francisco", "Helvetica Neue", "Helvetica", sans`,
		text: `"-apple-system-body", "SF Pro Text", "Neue Haas Grotesk Text", "BlinkMacSystemFont", "-apple-system", "San Francisco", "Helvetica Neue", "Helvetica", sans`,
	},
	colors: {
		black: "#000000",
		white: "#ffffff",
		grayFill: "#E6E6E6",
		grayBorder: "#C7C7C7",
		grayText: "#989898",
		primaryFill: "#C8D5D3",
		primaryText: "#7EA7A1",
		darkText: "#000000",
		lightText: "#D9D9D9",
		error: "#C13838"
	},
	space: {
		small: px(10),
		medium: px(15),
		large: px(25),
	},
	borderRadius: {
		small: px(8),
		medium: px(14),
		large: px(20)
	}
};

export const [theme, setTheme] = createSignal<DefaultTheme>(initialThemeValue);

import "solid-styled-components";

declare module "solid-styled-components" {
	export interface DefaultTheme {
		fontFamily: {
			display: string;
			text: string;
		};
		colors: {
			black: string;
			white: string;
			grayFill: string;
			grayBorder: string;
			grayText: string;
			primaryFill: string;
			primaryText: string;
			darkText: string;
			lightText: string;
			error: string;
		};
		space: {
			small: string;
			medium: string;
			large: string;
		},
		borderRadius: {
			small: string;
			medium: string;
			large: string;
		};
	}
}

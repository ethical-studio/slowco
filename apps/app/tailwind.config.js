// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,css,html}"],
  darkMode: "class",
  theme: {
		fontFamily: {
			display: ["-apple-system-headline", "SF Pro Display", "Neue Haas Grotesk Display", "BlinkMacSystemFont", "-apple-system", "San Francisco", "Helvetica Neue", "Helvetica", "sans"],
			text: ["-apple-system-body", "SF Pro Text", "Neue Haas Grotesk Text", "BlinkMacSystemFont", "-apple-system", "San Francisco", "Helvetica Neue", "Helvetica", "sans"],
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
  },
};

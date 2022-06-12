type Core = {
	person: {
		avatar: string;
		name: string;
		date: string;
	},
	title: string;
	image?: string;
};

type ImagesOnly = {
	images: string[];
};

type TextOnly = {
	text: string;
}

type DarkMode = {
	darkMode?: boolean;
}

export type LetterCardImagesProps = (Core & ImagesOnly & DarkMode);

export type LetterCardTextProps = (Core & TextOnly & DarkMode);

export type LetterCardItemProps = Core | LetterCardImagesProps | LetterCardTextProps;

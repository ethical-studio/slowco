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

export type LetterCardImagesProps = (Core & ImagesOnly);

export type LetterCardTextProps = (Core & TextOnly);

export type LetterCardProps = Core | LetterCardImagesProps | LetterCardTextProps;

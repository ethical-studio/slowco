import { LetterCardProps } from "./index.types";
import LetterCardImages from "./templates/Images";
import LetterCardText from "./templates/Text";

export const getTemplate = (props: LetterCardProps) => {
	return "images" in props
		? LetterCardImages
		: "text" in props
			? LetterCardText
			: null;
};

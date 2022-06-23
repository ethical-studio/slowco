import { TextSmall } from "elements/Typography";
import { Component } from "solid-js";

export type Props = {
	text: string;
};

const LetterCardItemText: Component<Props> = (_) => {
	return (
		<TextSmall>
			{_.text}
		</TextSmall>
	);
};

export default LetterCardItemText;

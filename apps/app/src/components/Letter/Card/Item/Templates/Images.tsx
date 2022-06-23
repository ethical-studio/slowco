import { Flex } from "elements";
import { Image } from "../styles";
import { Component, For } from "solid-js";

export type Props = {
	images: string[];
};

const LetterCardItemImages: Component<Props> = (_) => {
	return (
			<Flex direction="row">
				<For each={_.images}>
					{(image) => (
							<Image height={65} src={image} />
					)}
				</For>
			</Flex>
	);
};

export default LetterCardItemImages;

import { Component, For } from "solid-js";
import LetterCardItem, { Props as LetterCardItemProps } from "./Item";

export type Props = {
	items: LetterCardItemProps[];
};

const LetterCardList: Component<Props> = (_) => {
	return (
		<For each={_.items}>
			{(item) => (
				<LetterCardItem {...item} />
			)}
		</For>
	);
};

export default LetterCardList;

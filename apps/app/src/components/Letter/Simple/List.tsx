import { Flex } from "elements/Flex";
import { Component, For } from "solid-js";
import LetterSimpleItem, { Props as LetterSimpleItemProps } from "./Item";

type Props = {
	items: LetterSimpleItemProps[];
};

const LetterSimpleList: Component<Props> = (_) => {
	return (
		<Flex direction="column">
			<For each={_.items}>
				{(item) => (
					<LetterSimpleItem {...item} />
				)}
			</For>
		</Flex>
	);
};

export default LetterSimpleList;

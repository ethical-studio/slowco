import { Component, For } from "solid-js";
import { Flex } from "../../../elements/Flex";
import PersonCardItem, { Props as PersonCardItemProps } from "./Item";

export type Props = {
	items: PersonCardItemProps[];
};

const PersonCardList: Component<Props> = (_) => {
	return (
		<Flex direction="row">
			<For each={_.items}>
				{(item) => (
					<PersonCardItem {...item} />
				)}
			</For>
		</Flex>
	);
};

export default PersonCardList;

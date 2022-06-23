import { Component, For } from "solid-js";
import { Flex, Header } from "elements";
import PersonBlockedItem, { Props as PersonBlockedItemProps } from "./Item";

type Props = {
	title: string;
	items: PersonBlockedItemProps[];
};

const PersonBlockedList: Component<Props> = (_) => {
	return (
		<Flex direction="column">
						<Header>
							{_.title}
						</Header>

			<For each={_.items}>
				{(item) => (
					<PersonBlockedItem {...item} />
				)}
			</For>
		</Flex>
	);
};

export default PersonBlockedList;

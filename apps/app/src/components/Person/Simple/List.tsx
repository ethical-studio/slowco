import { Component, For, Show } from "solid-js";
import { Flex } from "elements/Flex";
import PersonSimpleItem, { PersonSimpleItemProps } from "./Item";
import { Header } from "elements/Typography";

type PersonSimpleListProps = {
		title?: string;
	list: PersonSimpleItemProps[];
};

const PersonSimpleList: Component<PersonSimpleListProps> = (_) => {
	return (
		<Flex direction="column">
					<Show when={_.title}>
						<Header>
							{_.title}
						</Header>
					</Show>

			<For each={_.list}>
				{(item) => <PersonSimpleItem {...item} />}
			</For>
		</Flex>
	);
};

export default PersonSimpleList;

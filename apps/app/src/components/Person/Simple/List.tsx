import { Component, For } from "solid-js";
import { Flex } from "../../../elements/Flex";
import PersonSimpleItem, { PersonSimpleItemProps } from "./Item";

type PersonSimpleListProps = {
	list: PersonSimpleItemProps[];
};

const PersonSimpleList: Component<PersonSimpleListProps> = (props) => {
	return (
		<Flex direction="column">
			<For each={props.list}>
				{(item) => <PersonSimpleItem {...item} />}
			</For>
		</Flex>
	);
};

export default PersonSimpleList;

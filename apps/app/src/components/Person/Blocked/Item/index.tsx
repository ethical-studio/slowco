import { Component } from "solid-js";
import { NameSmall } from "elements";
import { Container } from "./styles";

export type Props = {
	title: string;
};

const PersonBlockedItem: Component<Props> = (_) => {
	return (
			<Container>
			<NameSmall>{_.title}</NameSmall>
			</Container>
	);
};

export default PersonBlockedItem;

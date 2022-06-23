import { Component } from "solid-js";
import { AvatarCircle, Space, NameSmall, TextSmall } from "elements";
import { Container } from "./styles";

export type PersonSimpleItemProps = {
	avatar: string;
	title: string;
	content: string;
};

const PersonSimpleItem: Component<PersonSimpleItemProps> = (props) => {
	return (
		<Container>
			<AvatarCircle
				size="m"
				src={props.avatar}
				alt={props.title}
			/>

			<Space type="margin" side="l" size="s">
				<NameSmall>{props.title}</NameSmall>
				<TextSmall>{props.content}</TextSmall>
			</Space>
		</Container>
	);
};

export default PersonSimpleItem;

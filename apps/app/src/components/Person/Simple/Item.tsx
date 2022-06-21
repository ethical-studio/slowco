import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { AvatarCircle } from "../../../elements/Avatar";
import { Space } from "../../../elements/Space";
import { NameSmall, TextSmall } from "../../../elements/Typography";

export type PersonSimpleItemProps = {
	avatar: string;
	title: string;
	content: string;
};

const Container = styled("div")((props) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	paddingTop: props.theme?.space.small,
	paddingBottom: props.theme?.space.small,
	borderTop: `1px solid ${props.theme?.colors.grayBorder}`,
	"&:nth-last-child(1)": {
		borderBottom: `1px solid ${props.theme?.colors.grayBorder}`,
	}
}));

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

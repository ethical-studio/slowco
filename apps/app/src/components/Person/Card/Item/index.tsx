import { Component, Show } from "solid-js";
import { CaptionBold } from "elements/Typography";
import { Container, Title, Unread, Background, Avatar } from "./styles";

export type Props = {
	avatar: string;
	title: string;
	unread: number;
};

const PersonCardItem: Component<Props> = (_) => {
	return (
		<Container>
			<Background />

			<Avatar src={_.avatar} alt={_.title} />
			<Title>{_.title}</Title>

			<Show when={_.unread > 1}>
				<Unread>
					<CaptionBold>
						{_.unread}
					</CaptionBold>
				</Unread>
			</Show>
		</Container>
	);
};

export default PersonCardItem;

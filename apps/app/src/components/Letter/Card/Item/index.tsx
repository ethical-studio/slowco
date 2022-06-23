import { Title } from "elements";
import { Component, Match, Switch } from "solid-js";
import { Container, Avatar } from "./styles";
import LetterCardItemImages from "./Templates/Images";
import LetterCardItemText from "./Templates/Text";

type Core = {
	person: {
		avatar: string;
		name: string;
		date: string;
	},
	title: string;
	image?: string;
};

type ImagesOnly = Core & {
	images: string[];
};

type TextOnly = Core & {
	text: string;
}

export type Props = Core | ImagesOnly | TextOnly;

const LetterCardItem: Component<Props> = (_) => {
	return (
		<Container>
			<Avatar
				avatar={_.person.avatar}
				title={_.person.name}
				content={_.person.date}
			/>

			<Title>
				{_.title}
			</Title>

			<Switch>
				<Match when={"images" in _}>
					<LetterCardItemImages images={(_ as ImagesOnly).images} />
				</Match>

				<Match when={"text" in _}>
					<LetterCardItemText text={(_ as TextOnly).text} />
				</Match>
			</Switch>
		</Container>
	);
};

export default LetterCardItem;

import component from "../../../../utils/component";
import { PersonSimpleListProps } from "./index.types";
import Section from "../../../Section";
import { For } from "solid-js";
import PersonSimpleItem from "../Item";

export const [PersonSimpleList, Template] = component<PersonSimpleListProps>((props) => {
	return (
		<Section title={props.title}>
			<For each={props.items}>
				{(item) => <PersonSimpleItem {...item} />}
			</For>
		</Section>
	);
});

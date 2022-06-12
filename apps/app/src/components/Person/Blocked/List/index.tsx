import component from "../../../../utils/component";
import { PersonBlockedListProps } from "./index.types";
import Section from "../../../Section";
import { For } from "solid-js";
import PersonBlockedItem from "../Item";

export const [PersonBlockedList, Template] = component<PersonBlockedListProps>((props) => {
	return (
		<Section title={props.title}>
			<For each={props.items}>
				{(item) => <PersonBlockedItem {...item} />}
			</For>
		</Section>
	);
});

export default PersonBlockedList;

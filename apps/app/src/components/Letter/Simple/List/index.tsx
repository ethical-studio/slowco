import component from "../../../../utils/component";
import { LetterSimpleListProps } from "./index.types";
import Section from "../../../Section";
import { For } from "solid-js";
import LetterSimpleItem from "../Item";

export const [LetterSimpleList, Template] = component<LetterSimpleListProps>((props) => {
	return (
		<Section>
			<For each={props.items}>
				{(item) => (
					<LetterSimpleItem {...item} />
				)}
			</For>
		</Section>
	);
});

export default LetterSimpleList;

import styles from "./index.module.css";
import component from "../../../../utils/component";
import { PersonCardListProps } from "./types";
import { For } from "solid-js";
import PersonCardItem from "../Item";

export const [PersonCardList, Template] = component<PersonCardListProps>((props) => {
	return (
		<div class={styles.list}>
			<For each={props.items}>
				{(items) => (
					<PersonCardItem {...items} />
				)}
			</For>
		</div>
	);
});

export default PersonCardList;

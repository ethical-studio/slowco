import styles from "./index.module.css";
import component from "../../../../utils/component";
import { LetterCardListProps } from "./index.types";
import { For } from "solid-js";
import LetterCardItem from "../Item";

export const [LetterCardList, Template] = component<LetterCardListProps>((props) => {
	return (
		<div class={styles.list}>
			<For each={props.items}>
				{(item) => (
					<LetterCardItem {...item} />
				)}
			</For>
		</div>
	);
});

export default LetterCardList;

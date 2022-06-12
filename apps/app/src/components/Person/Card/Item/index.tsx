import styles from "./index.module.css";
import component from "../../../../utils/component";
import { PersonCardItemProps } from "./index.types";
import { createMemo, Show } from "solid-js";

export const [PersonCardItem, Template] = component<PersonCardItemProps>((props) => {
	const name = createMemo(() => props.name.replaceAll(" ", "\n"));

	return (
		<div class={styles.item}>
			<img
				class={styles.imageBackground}
				src={props.avatar}
				alt={props.name}
			/>

			<div class={styles.darkBackground} />

			<div class={styles.name}>
				{name()}
			</div>

			<Show when={props.count > 1}>
				<div class={styles.dot}>
					<div class={styles.count}>
						{props.count}
					</div>
				</div>
			</Show>
		</div>
	);
});

export default PersonCardItem;

import styles from "./index.module.css";
import component from "../../../../utils/component";
import { PersonSimpleItemProps } from "./index.types";
import { createMemo } from "solid-js";

export const [PersonSimpleItem, Template] = component<PersonSimpleItemProps>((props) => {
	const customClass = createMemo(() => props.darkMode ? styles.lightText: "");

	return (
		<div class={styles.item}>
			<div class={styles.left}>
				<img
					class={styles.avatar}
					src={props.avatar}
					alt={props.title}
				/>
			</div>

			<div class={styles.right}>
				<div class={`${styles.title} ${customClass()}`}>
					{props.title}
				</div>

				<div class={`${styles.content} ${customClass()}`}>
					{props.content}
				</div>
			</div>
		</div>
	);
});

export default PersonSimpleItem;

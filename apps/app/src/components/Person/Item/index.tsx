import styles from "./index.module.css";
import component from "../../../utils/component";
import { PersonItemProps } from "./index.types";

export const [PersonItem, Template] = component<PersonItemProps>((props) => {
	return (
		<div class={styles.person}>
			<div class={styles.left}>
				<img
					class={styles.avatar}
					src={props.avatar}
					alt={props.name}
				/>
			</div>

			<div class={styles.right}>
				<div class={styles.name}>{props.name}</div>
				<div class={styles.content}>{props.content}</div>
			</div>
		</div>
	);
});

export default PersonItem;

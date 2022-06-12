import styles from "./index.module.css";
import component from "../../../../utils/component";
import { LetterSimpleItemProps } from "./index.types";

export const [LetterSimpleItem, Template] = component<LetterSimpleItemProps>((props) => {
	return (
		<div class={styles.item}>
			<div class={styles.left}>
				<img
					src={props.avatar}
					alt={props.title}
					class={styles.avatar}
				/>
			</div>

			<div class={styles.right}>
				<div class={styles.title}>
					{props.title}
				</div>

				<div class={styles.content}>
					{props.content}
				</div>
			</div>
		</div>
	);
});

export default LetterSimpleItem;

import styles from "./index.module.css";
import component from "../../../../utils/component";
import { PersonBlockedItemProps } from "./index.types";

export const [PersonBlockedItem, Template] = component<PersonBlockedItemProps>((props) => {
	return (
		<div class={styles.item}>
			{props.name}
		</div>
	);
});

export default PersonBlockedItem;

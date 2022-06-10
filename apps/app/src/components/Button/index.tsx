import styles from "./index.module.css";
import { ButtonProps } from "./index.types";
import component from "../../utils/component";

export const [Button, Template] = component<ButtonProps>((props) => {
	return (
		<div class={`${styles.button} ${styles[`display-${props.display || "inline"}`]}`}>
			{props.children}
		</div>
	);
});

export default Button;

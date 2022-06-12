import styles from "./index.module.css";
import component from "../../utils/component";
import { SectionProps } from "./index.types";
import { Show } from "solid-js";

export const [Section, Template] = component<SectionProps>((props) => {
	return (
		<div class={styles.section}>
			<Show when={props.title}>
				{(title) => (
					<div class={styles.title}>
						{title}
					</div>
				)}
			</Show>

			<div class={styles.content}>
				{props.children}
			</div>
		</div>
	);
});

export default Section;

import styles from "./index.module.css";
import { LetterCardItemProps } from "./index.types";
import component from "../../../../utils/component";
import { createEffect, createMemo, Show } from "solid-js";
import { getTemplate } from "./index.help";
import PersonSimpleItem from "../../../Person/Simple/Item";

export const [LetterCardItem, Template] = component<LetterCardItemProps>((props) => {
	let Template = getTemplate(props);

	const darkMode = createMemo(() => !!props.image);

	createEffect(() => {
		Template = getTemplate(props);
	});

	return (
		<div class={styles.item}>
			<Show when={props.image}>
				{(image) => (
					<div class={styles.overlay}>
						<img
							class={styles.imageBackground}
							src={image}
							alt={`${props.title} - Background`}
						/>
						<div class={styles.darkBackground} />
					</div>
				)}
			</Show>

			<PersonSimpleItem
				avatar={props.person.avatar}
				title={props.person.name}
				content={props.person.date}
				darkMode={darkMode()}
			/>

			<div class={`${styles.title} ${darkMode() ? styles.lightText: ""}`}>
				{props.title}
			</div>

			<div class={styles.content}>
				<Show when={Template}>
					{(Component) => (
						<Component
							{...props as any}
							darkMode={darkMode()}
						/>
					)}
				</Show>
			</div>
		</div>
	);
});

export default LetterCardItem;

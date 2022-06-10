import styles from "./index.module.css";
import { LetterCardProps } from "./index.types";
import component from "../../../utils/component";
import { createEffect, Show } from "solid-js";
import { getTemplate } from "./index.help";
import PersonItem from "../../Person/Item";

export const [LetterCard, Template] = component<LetterCardProps>((props) => {
	let Template = getTemplate(props);

	createEffect(() => {
		Template = getTemplate(props);
	});

	return (
		<div class={styles.card}>
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

			<PersonItem
				avatar={props.person.avatar}
				name={props.person.name}
				content={props.person.date}
			/>

			<div class={styles.title}>
				{props.title}
			</div>

			<div class={styles.content}>
				<Show when={Template}>
					{(Component) => <Component {...props as any} />}
				</Show>
			</div>
		</div>
	);
});

export default LetterCard;

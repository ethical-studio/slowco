import styles from "../index.module.css";
import { Component, For } from "solid-js";
import { LetterCardImagesProps } from "../index.types";

const LetterCardImages: Component<LetterCardImagesProps> = (props) => {
	return (
		<div class={styles.imageList}>
			<For each={props.images}>
				{(image, i) => (
					<img
						class={styles.imageItem}
						src={image}
						alt={`${props.title} - ${i}`}
					/>
				)}
			</For>
		</div>
	);
};

export default LetterCardImages;

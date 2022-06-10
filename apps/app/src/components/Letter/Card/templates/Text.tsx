import styles from "../index.module.css";
import { Component } from "solid-js";
import { LetterCardTextProps } from "../index.types";

const LetterCardText: Component<LetterCardTextProps> = (props) => {
	return <div class={styles.text}>{props.text}</div>;
};

export default LetterCardText;

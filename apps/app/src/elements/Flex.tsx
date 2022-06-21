import { styled } from "solid-styled-components";

type Direction = "row" | "column";

export const Flex = styled("div")<{
	direction: Direction;
}>((props) => ({
	display: "flex",
	flexDirection: props.direction,
}));

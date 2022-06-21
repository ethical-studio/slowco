import { styled } from "solid-styled-components";
import { concat } from "../utils/string";
import { px } from "../utils/css";
import { SIDES, Sides } from "./Space";

export const Border = styled("div")<{
	side: Sides;
}>((props) => ({
	borderColor: props.theme?.colors.grayBorder,
	borderStyle: "solid",
	[concat("border", SIDES[props.side])]: px(1)
}));

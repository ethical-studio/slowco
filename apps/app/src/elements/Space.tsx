import { styled } from "solid-styled-components";
import { px } from "../utils/css";
import { concat } from "../utils/string";

type Type = "padding" | "margin";

export type Sides = "t" | "r" | "b" | "l";

export const SIDES: Record<Sides, string> = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
};

type Sizes = "s" | "m" | "l";

const SIZES: Record<Sizes, number> = {
	s: 10,
	m: 15,
	l: 25,
};

export const Space = styled("div")<{
	type: Type;
	side?: Sides;
	size?: Sizes;
}>((props) => ({
  [concat(props.type, props.side ? SIDES[props.side]: "")]: px(props.size ? SIZES[props.size]: SIZES.m)
}));

import { styled } from "solid-styled-components";
import { px } from "utils";

type Size = "s" | "m";

const SIZES: Record<Size, number> = {
	s: 30,
	m: 45,
};

export const AvatarCircle = styled("img")<{
	size: Size;
}>((props) => ({
	width: px(SIZES[props.size]),
	height: px(SIZES[props.size]),
	borderRadius: px(SIZES[props.size]),
	objectFit: "cover",
	flexShrink: 0
}));

export const AvatarSquare = styled("div")((props) => ({
	position: "relative",
	width: px(140),
	height: px(140),
	borderRadius: props.theme?.borderRadius.medium,
}));

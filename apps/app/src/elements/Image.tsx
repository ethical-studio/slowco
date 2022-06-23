import { styled } from "solid-styled-components";
import { per, px } from "utils/css";

export const Image = styled("img")<{
	$height?: number;
}>((_) => ({
	width: _.$height ? "auto": per(100),
	height: _.$height ? px(_.$height): "auto",
	borderRadius: _.theme?.borderRadius.medium,
}));

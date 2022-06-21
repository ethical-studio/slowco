import { styled } from "solid-styled-components";
import { per, rem } from "../utils/css";

// Private

const DisplayFamily = styled("div")((props) => ({
	fontFamily: props.theme?.fontFamily.display,
}));

const TextFamily = styled("div")((props) => ({
	fontFamily: props.theme?.fontFamily.text,
}));

// Public

export const Title = styled(DisplayFamily)({
	fontSize: rem(1.75),
	fontWeight: 800,
	lineHeight: 1.1
});

export const Header = styled(DisplayFamily)({
	fontSize: rem(1.25),
	fontWeight: 800,
});

export const Name = styled(DisplayFamily)({
	fontWeight: 800,
	lineHeight: 1.1
});

export const NameSmall = styled(DisplayFamily)({
	fontWeight: 600,
});

export const Caption = styled(DisplayFamily)({
	fontSize: rem(0.875),
});

export const Text = styled(TextFamily)({
	fontSize: rem(1),
});

export const TextSmall = styled(TextFamily)({
	fontSize: rem(0.875),
	opacity: per(50),
});

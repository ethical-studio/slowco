import { styled } from "solid-styled-components";

export const Container = styled("div")((_) => ({
	paddingTop: _.theme?.space.small,
	paddingBottom: _.theme?.space.small,
	borderTop: `1px solid ${_.theme?.colors.grayBorder}`,
	"&:nth-last-child(1)": {
		borderBottom: `1px solid ${_.theme?.colors.grayBorder}`,
	}
}));

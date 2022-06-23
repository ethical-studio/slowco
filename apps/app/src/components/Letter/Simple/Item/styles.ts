import { styled } from "solid-styled-components";
import { px } from "utils";

export const Container = styled("div")((_) => ({
	display: "flex",
	flexDirection: "column",
	paddingTop: _.theme?.space.medium,
	paddingBottom: _.theme?.space.medium,
	borderTop: `${px(1)} solid`,
	borderColor: _.theme?.colors.grayBorder,
	"&:nth-last-child(1)": {
		borderBottom: px(1),
	},
}));

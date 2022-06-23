import PersonSimpleItem from "components/Person/Simple/Item";
import { Image as ImageElement } from "elements";
import { px } from "utils";
import { styled } from "solid-styled-components";

export const Container = styled("div")((_) => ({
	backgroundColor: _.theme?.colors.primaryFill,
	borderRadius: _.theme?.borderRadius.medium,
	padding: _.theme?.space.medium,
}));

export const Avatar = styled(PersonSimpleItem)((_) => ({
	marginBottom: _.theme?.space.large,
}));

export const Image = styled(ImageElement)((_) => ({
	marginRight: _.theme?.space.small,
	"&:nth-last-child(1)": {
		marginRight: px(0)
	}
}));

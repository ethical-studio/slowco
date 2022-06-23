import { styled } from "solid-styled-components";
import { AvatarSquare, Name } from "elements";
import { per, px } from "utils";

export const Container = styled(AvatarSquare)((_) => ({
	marginRight: _.theme?.space.small,
	"&:nth-last-child(1)": {
		marginRight: px(0),
	},
}));

export const Background = styled("div")((_) => ({
	position: "absolute",
	top: 0,
	left: 0,
	width: per(100),
	height: per(100),
	backgroundColor: _.theme?.colors.black,
	opacity: per(50),
}));

export const Avatar = styled("img")({
	position: "absolute",
	top: 0,
	left: 0,
	width: per(100),
	height: per(100),
	objectFit: "cover"
});

export const Unread = styled("div")((_) => ({
	position: "absolute",
	top: _.theme?.space.medium,
	right: _.theme?.space.medium,
	wifth: _.theme?.space.large,
	height: _.theme?.space.large,
		backgroundColor: _.theme?.colors.white,
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyItems: "center",
}));

export const Title = styled(Name)((_) => ({
	position: "absolute",
	bottom: _.theme?.space.medium,
	left: _.theme?.space.medium,
}));

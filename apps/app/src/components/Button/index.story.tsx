import { Template } from "./index";
import story from "../../utils/story";

export default story({
	title: "Components/Button",
});

export const Inline = Template({
	children: "Send",
	display: "inline"
});

export const Block = Template({
	children: "Login",
	display: "block"
});

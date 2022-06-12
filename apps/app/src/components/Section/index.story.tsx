import story from "../../utils/story";
import { Template } from "./index";

export default story({
	title: "Components/Section"
});

export const Basic = Template({
		title: "Basic",
		children: () => <div />,
	}
);

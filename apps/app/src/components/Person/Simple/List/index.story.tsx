import story from "../../../../utils/story";
import { Template } from "./index";

export default story({
	title: "Components/Person/Simple"
});

export const List = Template({
	title: "Requests",
	items: new Array(6).fill({
		title: "Miroslav Vršecký",
		avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80",
		content: "Mauris sed diam tincidunt, ornare diam sit .."
	})
});

import story from "../../../../utils/story";
import { Template } from "./index";

export default story({
	title: "Components/Letter/Simple"
});

export const List = Template({
	items: new Array(4).fill({
		title: "Včera jsem koukal na hodinový dokument o člověku, který se rozhodl rok žít o samotě na ostrově jen s pár základníma věcma.",
		content: "20. 4. 2022",
		avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80"
	})
});

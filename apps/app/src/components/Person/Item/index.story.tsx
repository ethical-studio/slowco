import { Template } from "./index";
import story from "../../../utils/story";

const SHARED = {
	name: "Miroslav Vršecký",
	avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80"
};

const DATE_DATA = {
	...SHARED,
	content: "20. 4. 2022"
};

const TEXT_DATA = {
	...SHARED,
	content: "Pellentesque molestie nisi vitae sagittis mattis. Mauris at tempus ligula. Donec viverra nisi id elit pretium, quis mollis ante bibendum. Ut eleifend vitae turpis vel sodales."
};

export default story({
	title: "Components/Person/Item",
});

export const Content_Date = Template(DATE_DATA);

export const Content_Text = Template(TEXT_DATA);

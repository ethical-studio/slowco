import story from "../../../../utils/story";
import { Template } from "./index";

export default story({
	title: "Components/Person/Blocked"
});

export const List = Template({
	items: new Array(4).fill({
		name: "Miroslav Vršecký"
	})
});

import { Template } from "./index";
import story from "../../../../utils/story";

const image = "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80";

const COLOR_SHARED = {
	person: {
		avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80",
		name: "Miroslav Vršecký",
		date: "20. 4. 2022",
	},
	title: "Včera jsem koukal na hodinový dokument o člověku, který se rozhodl rok žít o samotě na ostrově jen s pár základníma věcma.",
};

const IMAGE_SHARED = {
	...COLOR_SHARED,
	image
};

const COLOR = {
	images: {
		...COLOR_SHARED,
		images: [
			"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80",
			"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
			"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
			"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
		]
	},
	text: {
		...COLOR_SHARED,
		text: "Maecenas ultrices blandit laoreet. Mauris sed diam tincidunt, ornare diam sit amet, elementum neque. Donec et finibus leo. Etiam ac blandit nibh. Pellentesque cursus metus vitae laoreet bibendum. Praesent faucibus nec velit non congue. In hac habitasse platea dictumst. Vivamus ac quam erat. Nunc enim neque, vestibulum quis scelerisque id, venenatis at felis. Aliquam ut varius leo, ut luctus odio."
	},
};

const IMAGE = {
	images: {
		...COLOR.images,
		image
	},
	text: {
		...COLOR.text,
		image
	},
};

export default story({
	title: "Components/Letter/Card",
});

export const Color_Images = Template(COLOR.images)

export const Color_Introtext = Template(COLOR.text)

export const Color_Empty = Template(COLOR_SHARED);

export const Image_Images = Template(IMAGE.images)

export const Image_Introtext = Template(IMAGE.text)

export const Image_Empty = Template(IMAGE_SHARED);

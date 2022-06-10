import { Component } from "solid-js";
import { Story } from "@storybook/html";

export  default function component<T>(CustomComponent: Component<T>) {
	const Template = ((args: T) => <CustomComponent {...args} />) as Story<T>;

	return [
		CustomComponent as Component<T>,
		(args: T) => {
			const instance = Template.bind({});
			instance.args = args;
			return instance;
		}
	] as const;
}

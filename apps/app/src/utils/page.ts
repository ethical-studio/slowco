import { Component } from "solid-js";

export function page<T extends Record<string, any> = {}>(component: Component<T>) {
	return component;
}

import { Component, lazy } from "solid-js";
import {
	AnyKeys,
	LeftKeys,
	LeftRoutes,
	MainKeys,
	MainRoutes,
	RightKeys,
	RightRoutes
} from "../routes";

export type Routes = {
	main: Record<string, ReturnType<typeof lazy>>,
	left: Record<string, ReturnType<typeof lazy>>,
	right: Record<string, ReturnType<typeof lazy>>,
};

export type RouterItem<T extends AnyKeys> = [route: T, data: any];

export type ExtractRoutes<T extends Routes, K extends keyof Routes> = {
	[A in keyof T[K]]: T[K][A] extends Component<infer D>
		? D
		: never;
};

export type ExtractRouteData<T extends AnyKeys> = T extends MainKeys
	? MainRoutes[T]
	: T extends LeftKeys
		? LeftRoutes[T]
		: T extends RightKeys
			? RightRoutes[T]
			: never;

export type RouteDataOrEmpty<T extends AnyKeys> = ExtractRouteData<T> extends infer X
	? X extends Record<string, never>
		? null
		: X
	: never;

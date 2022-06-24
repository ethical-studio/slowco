import { createMemo, createSignal, Setter } from "solid-js";
import {
	AnyKeys,
	LeftKeys,
	MainKeys,
	RightKeys,
	routesMap, RouteTypes
} from "../routes";
import { Nullable } from "types/core";
import { RouteDataOrEmpty } from "types/router";
import { getDeviceType } from "utils/router";

// - Based on resolution we use either mobile or desktop router
// 		- Mobile router can have only one active item in either left/right
//  	- Desktop router can have different active items in both left/right
// 		- Both versions re-render when core changes
// - One function to navigate to main/left/right
// - Another function to add/remove tabs (opened letters)
// - Mobile and desktop versions use different routers

const [device, setDevice] = createSignal<"mobile" | "desktop">(getDeviceType());

// const [tabs, setTabs] = createSignal<string[]>([]);

const [mainNavigation, setMainNavigation] = createSignal<Nullable<[MainKeys, any]>>(["login", {}]);

const [leftNavigation, setLeftNavigation] = createSignal<Nullable<[LeftKeys, any]>>(null);

const [rightNavigation, setRightNavigation] = createSignal<Nullable<[RightKeys, any]>>(null);

const router = createMemo(() => {
	const main = mainNavigation();
	const left = leftNavigation();
	const right = rightNavigation();

	return device() === "desktop"
		? { main, left, right }
		: { main, route: left || right };
});

const SIGNAL_MAP: Record<RouteTypes, Setter<Nullable<string>>> = {
	main: setMainNavigation,
	left: setLeftNavigation,
	right: setRightNavigation,
};

const navigate = <T extends AnyKeys>(
	route: T,
	data: RouteDataOrEmpty<T>,
) => {
	const type = routesMap[route] as RouteTypes;
	const signal = SIGNAL_MAP[type] as Setter<Nullable<[string, any]>>;

	signal(() => [route, data]);
};

import { Routes } from "types/router";
import { AnyKeys, RouteTypes } from "../routes";

export function createRoutes<T extends Routes>(routes: T) {
	return routes;
}

export function createRoutesMap<T extends Routes>(routes: T) {
	const map: Record<AnyKeys, RouteTypes> = {} as any;

	for(const type in routes) {
		for(const route in routes[type as RouteTypes]) {
			map[route as AnyKeys] = type as RouteTypes;
		}
	}

	return map;
}

export function getDeviceType() {
	return window.innerWidth >= 1280 ? "desktop": "mobile";
}

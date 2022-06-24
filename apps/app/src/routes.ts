import { lazy } from "solid-js";
import { createRoutes, createRoutesMap } from "utils/router";
import { ExtractRoutes } from "types/router";

export const routes = createRoutes({
	main: {
		login: lazy(() => import("./pages/Login")),
		register: lazy(() => import("./pages/Login")),
		resetPassword: lazy(() => import("./pages/Login")),
	},
	left: {
		inbox: lazy(() => import("./pages/Register")),
		letter: lazy(() => import("./pages/Login")),
		settings: lazy(() => import("./pages/Login")),
		settingsItem: lazy(() => import("./pages/Login")),
	},
	right: {
		contacts: lazy(() => import("./pages/Login")),
		contactsItem: lazy(() => import("./pages/Login")),
	},
});

export type MainRoutes = ExtractRoutes<typeof routes, "main">;
export type LeftRoutes = ExtractRoutes<typeof routes, "left">;
export type RightRoutes = ExtractRoutes<typeof routes, "right">;

export type RouteTypes = keyof typeof routes;

export type MainKeys = keyof MainRoutes;
export type LeftKeys = keyof LeftRoutes;
export type RightKeys = keyof RightRoutes;

export type AnyKeys = MainKeys | LeftKeys | RightKeys;

export const routesMap = createRoutesMap(routes);

export default routes;

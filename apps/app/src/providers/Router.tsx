import {
	Component,
	createSignal,
	onCleanup,
	onMount, Setter,
	Show, Accessor, createMemo, Switch, Match, JSX, createEffect
} from "solid-js";
import { RouterContext } from "src/contexts";
import { AnyKeys, LeftKeys, MainKeys, RightKeys, routesMap, RouteTypes } from "src/routes";
import { Nullable } from "types/core";
import { RouteDataOrEmpty, RouterItem, Routes } from "types/router";
import { getDeviceType } from "utils/router";
import { device, setDevice } from "stores/userStore";

type TRouterProvider = Component<{
	routes: Routes;
}>;

const onResize = () => {
	// TODO: add debounce
	setDevice(getDeviceType());
};

type Layout = {
	left: Accessor<Nullable<RouterItem<LeftKeys>>>;
	right: Accessor<Nullable<RouterItem<RightKeys>>>;
	render: (item: RouterItem<MainKeys | LeftKeys | RightKeys>) => JSX.Element;
};

const ErrorPage: Component = () => {
	return (
		<h1>Error</h1>
	);
};

const DesktopLayout: Component<Layout> = (_) => {
	return (
		<div>
			<div>
				<Show when={_.left()}>
					{_.render}
				</Show>
			</div>

			<div>
				<Show when={_.right()}>
					{_.render}
				</Show>
			</div>
		</div>
	);
};

const MobileLayout: Component<Layout> = (_) => {
	const route = createMemo(() => _.left() || _.right() || null);

	return (
		<Show when={route()} fallback={<ErrorPage />}>
			{_.render}
		</Show>
	);
};

export const RouterProvider: TRouterProvider = (_) => {
	const [mainNavigation, setMainNavigation] = createSignal<Nullable<RouterItem<MainKeys>>>(["login", {}]);
	const [leftNavigation, setLeftNavigation] = createSignal<Nullable<RouterItem<LeftKeys>>>(null);
	const [rightNavigation, setRightNavigation] = createSignal<Nullable<RouterItem<RightKeys>>>(null);

	const render = ([name, data]: RouterItem<MainKeys | LeftKeys | RightKeys>) => {
		const Component = _.routes[routesMap[name]][name];
		return <Component {...data} />
	};

	const SIGNAL_MAP: Record<RouteTypes, Setter<Nullable<RouterItem<any>>>> = {
		main: setMainNavigation,
		left: setLeftNavigation,
		right: setRightNavigation
	};

	const store = {
		navigate<T extends AnyKeys>(route: T, data: RouteDataOrEmpty<T>) {
			const type = routesMap[route];

			if(type !== "main") {
				setMainNavigation(null);
			}

			SIGNAL_MAP[type]([route, data || {}]);
		}
	};

	createEffect(() => setRightNavigation(device() === "desktop"
		? ["contacts", {}]
		: null
	));

	onMount(() => {
		window.addEventListener("resize", onResize);
	});

	onCleanup(() => {
		window.removeEventListener("resize", onResize);
	});

	return (
		<RouterContext.Provider value={store}>
			<Switch fallback={<Show when={device()}>
				{(device) => {
					const Component = device === "desktop"
						? DesktopLayout
						: MobileLayout;

					return (
						<Component
							left={leftNavigation}
							right={rightNavigation}
							render={render}
						/>
					);
				}}
			</Show>}>
				<Match when={mainNavigation()}>
					{render}
				</Match>
			</Switch>
		</RouterContext.Provider>
	);
};

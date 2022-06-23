import { createSignal } from "solid-js";

type Nullable<T> = T | null;

// type Route = "home" | "login" | "register" | "reset-password";

// export const [route, setRoute] = createSignal<Route>("home");


type Page<N, D = {}> = {
	name: N;
	data: D;
};

type Device = "mobile" | "desktop";

type Navigation = {
	core: Nullable<Page<"login"> | Page<"register"> | Page<"reset-password">>;
	tabs: Nullable<string[]>;
	left: Nullable<Page<"inbox"> | Page<"settings"> | Page<"setting", { type: string }>>;
	right: Nullable<Page<"contacts"> | Page<"contact", { nickname: string }>>;
};

navigate("login");
navigate("inbox");
navigate("contact", { nickname: "yamiteru" });

addTabs("sefsgfesgsef");
removeTabs("fsfsefssfs");

const MAP = {
	inbox: "left",
	login: "public",
	contact: "right"
};

type RouterMobile = {
	route: Page<any>;
};

type RouterDesktop = {
	core: Nullable<Page<any>>;
	tabs: Nullable<string[]>;
	left: Nullable<Page<any>>;
	right: Nullable<Page<any>>;
};

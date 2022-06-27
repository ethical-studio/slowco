import { createContext } from "solid-js";
import { AnyKeys } from "src/routes";
import { RouteDataOrEmpty } from "types/router";

export type RouterStore = {
	navigate: <T extends AnyKeys>(route: T, data: RouteDataOrEmpty<T>) => void;
};

export const RouterContext = createContext<RouterStore>({} as any);

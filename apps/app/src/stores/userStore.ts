import { createSignal } from "solid-js";

export const [userToken, setUserToken] = createSignal<string | null>(null);

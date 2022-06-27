import { createSignal } from "solid-js";
import { getDeviceType } from "utils/router";

export const [userToken, setUserToken] = createSignal<string | null>(null);

export const [device, setDevice] = createSignal<"mobile" | "desktop">(getDeviceType());

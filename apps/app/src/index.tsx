import { render } from "solid-js/web";

import App from "./App";

// NOTE: now attributes cannot even be accessed
// setup(null, shouldForwardProp((prop) => {
// 	return prop[0] !== "$";
// }));

render(() => <App />, document.getElementById("root") as HTMLElement);

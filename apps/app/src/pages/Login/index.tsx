import { Component } from "solid-js";
import { userToken } from "stores";

const LoginPage: Component = () => {
	return <div>Token: {userToken() ? userToken(): "None"}</div>;
}

export default LoginPage;

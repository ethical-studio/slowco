import { Component } from "solid-js";
import { userToken } from "../../store/userStore";

const LoginPage: Component = () => {
	return <div>Token: {userToken() ? userToken(): "None"}</div>;
}

export default LoginPage;

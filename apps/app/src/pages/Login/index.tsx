import { page } from "utils/page";

const LoginPage = page<{ name: string; }>((_) => {
	return <div>Hello, {_.name}</div>;
});

export default LoginPage;

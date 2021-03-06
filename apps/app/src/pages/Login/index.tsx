import { page } from "utils/page";
import { useNavigate } from "../../hooks/useNavigate";

const LoginPage = page((_) => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Login</h1>
			<button onClick={() => navigate("inbox", null)}>
				Inbox
			</button>
		</div>
	);
});

export default LoginPage;

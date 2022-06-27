import { page } from "utils/page";
import { useNavigate } from "../../hooks/useNavigate";

const RegisterPage = page((_) => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Register</h1>
			<button onClick={() => navigate("login", null)}>
				Login
			</button>
		</div>
	);
});

export default RegisterPage;

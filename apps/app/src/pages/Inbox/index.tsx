import { page } from "utils/page";
import { useNavigate } from "../../hooks/useNavigate";

const InboxPage = page((_) => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Inbox</h1>
			<button onClick={() => navigate("login", null)}>
				Login
			</button>
		</div>
	);
});

export default InboxPage;

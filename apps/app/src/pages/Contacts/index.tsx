import { page } from "utils/page";
import { useNavigate } from "../../hooks/useNavigate";

const ContactsPage = page((_) => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Contacts</h1>
			<button onClick={() => navigate("login", null)}>
				Login
			</button>
		</div>
	);
});

export default ContactsPage;

import { useContext } from "solid-js";
import { RouterContext } from "../contexts";

export function useNavigate() {
	const { navigate } = useContext(RouterContext);
	return navigate;
}

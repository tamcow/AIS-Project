import { jwtDecode } from "jwt-decode";
type JWTPayload = {
	email: string;
	isAdmin: boolean;
	name: string;
	_id: string;
};
const decodeJWT = (token: string) => {
	const data = jwtDecode<JWTPayload>(token);
	return data;
};

export default decodeJWT;

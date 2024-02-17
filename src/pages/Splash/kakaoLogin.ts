import axios from 'axios';

export const kakaoLogin = async (code: string | null) => {
	// const config: any = {
	// 	grant_type: 'authorization_code',
	// 	code: code,
	// 	client_id: CLIENT_ID,
	// 	redirect_uri: REDIRECT_URL,
	// };
	const baseUrl = `http://118.67.132.171:8080/api/auth/kakao`;

	try {
		const response = await axios.post(baseUrl);

		if (response) {
			alert('로그인 완료되었습니다!');
			return response.data.access_token;
		}
	} catch (err: any) {
		alert(`로그인 오류. ${err.message}`);
	}
};

import axios from 'axios';
import { CLIENT_ID, REDIRECT_URL } from '../../components/Auth/OAuth';

export const kakaoLogin = async (code: string | null) => {
	const config: any = {
		grant_type: 'authorization_code',
		code: code,
		client_id: CLIENT_ID,
		redirect_uri: REDIRECT_URL,
	};
	const params = new URLSearchParams(config).toString();
	const baseUrl = `https://kauth.kakao.com/oauth/token?${params}`;

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

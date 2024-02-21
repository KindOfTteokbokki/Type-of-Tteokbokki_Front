import axios from 'axios';
import { baseUrl } from '../../api/useAxios';

export const kakaoLogin = async (code: string | null) => {
	try {
		const response = await axios.post(`${baseUrl}/auth/kakao`);

		if (response) {
			alert('로그인 완료되었습니다!');
			return response.data.access_token;
		}
	} catch (err: any) {
		alert(`로그인 오류. ${err.message}`);
	}
};

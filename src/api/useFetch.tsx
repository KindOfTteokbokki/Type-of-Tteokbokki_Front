import axios from 'axios';

const usePost = (url: any) => {
	const postFunc = async (postData: any) => {
		const headers = {
			accept: '*/*',
		};

		const response = await axios({
			headers: headers,
			method: 'post',
			url: url,
			data: postData,
		});

		if (response) {
			return response;
		}
	};

	return postFunc;
};

const useGet = (url: any) => {
	const getFunc = async () => {
		const headers = {
			accept: '*/*',
		};

		const response = await axios({
			headers: headers,
			method: 'get',
			url: url,
		});

		if (response) {
			return response;
		}
	};
	return getFunc;
};

export { useGet, usePost };

import axios from 'axios';

const usePost = (url: any) => {
	const postFunc = async (postData: any, header?: any) => {
		let response;

		if (header) {
			response = await axios({
				headers: header,
				method: 'post',
				url: url,
				data: postData,
			});
		} else {
			const headers = {
				accept: '*/*',
			};

			response = await axios({
				headers: headers,
				method: 'post',
				url: url,
				data: postData,
			});
		}

		if (response) {
			return response;
		}
	};

	return postFunc;
};

const useGet = (url: any) => {
	const getFunc = async (header?: any) => {
		if (header) {
			const response = await axios({
				headers: header,
				method: 'get',
				url: url,
			});

			return response;
		} else {
			const headers = {
				accept: '*/*',
			};

			const response = await axios({
				headers: headers,
				method: 'get',
				url: url,
			});

			return response;
		}
	};
	return getFunc;
};

export { useGet, usePost };

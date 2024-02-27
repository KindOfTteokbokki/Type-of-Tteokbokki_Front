import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseUrl = 'http://dev.utteok.com/api';

interface Request {
	method: string;
	url: string;
	headers: Object;
	data?: any;
	params?: any;
}

interface RawAxiosRequestConfig<T = any> extends AxiosRequestConfig {
	data?: any;
}

const useAxios = (axiosParams: RawAxiosRequestConfig<Request>) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [error, setError] = useState<AxiosError>();
	const [loading, setLoading] = useState(true);

	const fetchData = async (params: RawAxiosRequestConfig<Request>) => {
		await axios
			.request(params)
			.then((response) => {
				setResponse(response);
			})
			.catch((error) => {
				console.log(error.message);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const sendData = () => {
		fetchData(axiosParams);
	};

	useEffect(() => {
		fetchData(axiosParams);
	}, []);

	return { response, error, loading, sendData };
};

export default useAxios;

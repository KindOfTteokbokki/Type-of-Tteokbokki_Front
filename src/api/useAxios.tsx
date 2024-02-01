import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const baseUrl = 'http://118.67.132.171:8080/api/';

interface Request {
	method: string;
	url: string;
	headers: Object;
}
interface RawAxiosRequestConfig<T = any> extends AxiosRequestConfig {
	data?: T;
}

const useAxios = (axiosParams: RawAxiosRequestConfig<Request>) => {
	const [response, setResponse] = useState<AxiosResponse>();
	const [error, setError] = useState<AxiosError>();
	const [loading, setLoading] = useState(true);

	const fetchData = async (params: RawAxiosRequestConfig) => {
		await axios
			.request(params)
			.then((response) => {
				setResponse(response);
			})
			.catch((error) => {
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

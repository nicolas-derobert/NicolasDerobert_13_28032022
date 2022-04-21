
import { useState, useEffect } from "react";
import axios from "axios";
	
export const useApi = ({
	url,
	method,
	body = null,
	headers = null,
}) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchData =  () => {
		 axios[method](url, JSON.parse(headers), JSON.parse(body))
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [method, url, body, headers]);
	return { response, error, loading };
};
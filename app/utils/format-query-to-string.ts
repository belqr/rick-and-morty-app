export function formatQueryString(query: any) {
	const validKeys = Object.keys(query).filter((key) => query[key]);
	if (validKeys.length === 0) {
		return "";
	}
	const firstKey = validKeys[0];
	const queryString = `?${firstKey}=${encodeURIComponent(query[firstKey])}`;
	const remainingParams = validKeys
		.slice(1)
		.map((key) => `${key}=${encodeURIComponent(query[key])}`)
		.join("&");

	return remainingParams ? `${queryString}&${remainingParams}` : queryString;
}

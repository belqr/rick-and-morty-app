export function ExtractIDFromURL(url: string) {
	const regex = /.*\/api\/episode\/(\d+)$/;
	const match = url.match(regex);

	return match ? match[1] : null;
}

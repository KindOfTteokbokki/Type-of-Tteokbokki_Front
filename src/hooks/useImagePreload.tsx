import { useEffect, useState } from 'react';

export function useImagePreload(imageUrls: string[]) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		Promise.all(
			imageUrls.map((url) => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = url;
					img.onload = resolve;
					img.onerror = reject;
				});
			})
		)
			.then(() => setLoaded(true))
			.catch((error) => console.error('이미지 로드 중 오류 발생:', error));
	}, [imageUrls]);

	return loaded;
}

import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { DropBack } from '../Loaded/Modal/style';
import { usePost } from '../../api/useFetch';

export default function RecommendWrite(props: any) {
	const [text, setText] = useState('');
	const formData = new FormData();
	const writeRef = useRef<any>(null);
	const postFunc = usePost('http://118.67.132.171:8080/api/saveRecommend');

	useEffect(() => {
		const handler = (e: any) => {
			if (writeRef.current && !writeRef.current.contains(e.target)) {
				props.setKeyBoard(false);
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	const saveReview = async () => {
		formData.append('content', text);

		const header = { 'Content-Type': 'multipart/form-data' };

		await postFunc(formData, header).then((response) => {
			console.log(response);
		});
	};

	return (
		<DropBack>
			<S.TextField ref={writeRef}>
				<S.TextArea
					placeholder="본인만의 꿀조합을 추천해줘!(40자)"
					onKeyDown={(e: any) => {
						setText(e.target.value);
						if (text.length >= 40) {
							alert('글자는 40자를 초과할 수 없어');
						}
					}}
				></S.TextArea>
				<S.UploadIcon
					onClick={() => {
						saveReview();
					}}
				/>
				<S.CameraIcon />
			</S.TextField>
		</DropBack>
	);
}

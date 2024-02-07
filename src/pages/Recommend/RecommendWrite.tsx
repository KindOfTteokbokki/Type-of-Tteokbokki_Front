import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { DropBack } from '../Loaded/Modal/style';
import { usePost, useGet } from '../../api/useFetch';

export default function RecommendWrite(props: any) {
	const [text, setText] = useState('');
	const [imgUrl, setImgUrl] = useState('');
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
		formData.append('file', imgUrl);

		await postFunc(formData, { 'Content-Type': 'multipart/form-data' }).then((response) => {
			window.alert('등록되었어!');
			window.location.reload();
		});
	};

	return (
		<S.RecommDropBack>
			<S.WriteCont>
				<S.DeleteIcon />
				<S.TextField ref={writeRef}>
					<S.TextArea
						placeholder="본인만의 꿀조합을 추천해줘!(40자)"
						onKeyUp={(e: any) => {
							setText(e.target.value);
							if (text.length >= 40) {
								alert('글자는 40자를 초과할 수 없어');
							}
						}}
					></S.TextArea>
					{imgUrl ? <S.PreloadImg src={imgUrl} /> : <S.PreloadImg />}
					<S.UploadIcon
						onClick={() => {
							saveReview();
						}}
					/>
					<S.CameraIcon>
						<S.CameraInput
							type="file"
							onChange={(e: any) => {
								setImgUrl(e.target.files[0]);
							}}
						/>
					</S.CameraIcon>
				</S.TextField>
			</S.WriteCont>
		</S.RecommDropBack>
	);
}

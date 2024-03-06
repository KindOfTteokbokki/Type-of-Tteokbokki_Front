import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { usePost, useGet } from '../../api/useFetch';
import WriteModal from './WriteModal';
import { baseUrl } from '../../api/useAxios';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';

export default function RecommendWrite(props: any) {
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});
	const [text, setText] = useState(props.originData ? props.originData.content : '');

	const [imgUrl, setImgUrl] = useState<any>(
		props.originData ? props.originData.file_path + props.originData.file_masking_name : undefined
	);
	const [modal, setModal] = useState(false);
	const formData = new FormData();
	const writeRef = useRef<any>(null);
	const postFunc = usePost(`${baseUrl}/saveRecommend`);
	const editPostFunc = usePost(`${baseUrl}/modifyRecommend`);

	const onClickDelete = () => {
		setImgUrl('');
	};

	useEffect(() => {
		const handler = (e: any) => {
			if (writeRef.current && !writeRef.current.contains(e.target)) {
				props?.setKeyBoard(false);
				props?.onClickButton();
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	const saveReview = async () => {
		formData.append('content', text);
		if (imgUrl) {
			formData.append('file', imgUrl);
		}

		await postFunc(formData, { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }).then(
			(response) => {
				window.alert('등록되었어!');
				window.location.reload();
			}
		);
	};

	const editReview = async () => {
		formData.append('content', text);
		if (imgUrl) {
			formData.append('file', imgUrl);
		}
		formData.append('user_id', props.originData.user_id);
		formData.append('file_path', props.originData.file_path);
		formData.append('file_original_name', props.originData.file_original_name);
		formData.append('file_masking_name', props.originData.file_masking_name);
		formData.append('review_seq', props.originData.review_seq);

		await editPostFunc(formData, { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }).then(
			() => {
				window.alert('수정되었어!');
				window.location.reload();
			}
		);
	};

	return (
		<S.RecommDropBack role="dropBack">
			<S.WriteCont>
				<S.DeleteIcon />
				<S.TextField ref={writeRef}>
					<S.TextArea
						placeholder="본인만의 꿀조합을 추천해줘!(30자)"
						defaultValue={props.originData?.content}
						onKeyUp={(e: any) => {
							setText(e.target.value);
							if (text.length >= 30) {
								alert('글자는 30자를 초과할 수 없어');
							}
						}}
					></S.TextArea>

					{text.length > 0 ? <S.CountText>{`(${text.length}/30자)`}</S.CountText> : null}

					<S.UploadIcon
						onClick={() => {
							setModal(true);
						}}
					/>
					{imgUrl ? (
						<S.PreloadCont onClick={onClickDelete}>
							<S.PreloadImg src={props.originData ? imgUrl : URL.createObjectURL(imgUrl)} />
							<S.PreloadDeleteIcon />
						</S.PreloadCont>
					) : (
						<S.CameraIcon>
							<S.CameraInput
								type="file"
								onChange={(e: any) => {
									setImgUrl(e.target.files[0]);
								}}
							/>
						</S.CameraIcon>
					)}
					{modal ? (
						<WriteModal modal={modal} setModal={setModal} saveReview={props.originData ? editReview : saveReview} />
					) : null}
				</S.TextField>
			</S.WriteCont>
		</S.RecommDropBack>
	);
}

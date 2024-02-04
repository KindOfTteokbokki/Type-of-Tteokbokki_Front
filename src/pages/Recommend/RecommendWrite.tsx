import React, { useState } from 'react';
import * as S from './style';
import { DropBack } from '../Loaded/Modal/style';

export default function RecommendWrite() {
	const [text, setText] = useState('');
	const formData = new FormData();

	return (
		<DropBack>
			<S.TextField>
				<S.TextArea
					placeholder="본인만의 꿀조합을 추천해줘!(40자)"
					onKeyDown={(e: any) => {
						setText(e.target.value);
					}}
				></S.TextArea>
				<S.UploadIcon onSubmit={() => {}} />
				<S.CameraIcon />
			</S.TextField>
		</DropBack>
	);
}

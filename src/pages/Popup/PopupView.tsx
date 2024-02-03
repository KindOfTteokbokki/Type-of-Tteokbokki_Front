import React from 'react';
import { Layout } from '../Splash/style';
import * as S from './style';
import { PopupHeader } from './style';

export interface Props {
	popUpHeader: string;
	popUpMessage: string;
	onClickMove(): void;
	data: any;
}

export default function PopupView(props: Props) {
	return (
		<S.Layout>
			<PopupHeader>{props?.popUpHeader}</PopupHeader>
			<S.Cont>
				<S.Text>{props?.popUpMessage}</S.Text>
				<S.HeadText>{props.data?.title_name}</S.HeadText>
				<S.Img src={props.data?.img_file_path + props.data?.img_file_masking_name} />
			</S.Cont>
			<S.Button onClick={props.onClickMove} />
		</S.Layout>
	);
}

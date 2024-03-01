import React from 'react';
import * as S from '../../components/DetailView/style';
import { Button } from '../Popup/style';
import ChainStoreView from '../Loaded/view/ChainStoreView';
import { Action } from '../../slice/findStoreSlice';

interface MyTasteProps {
	header: string;
	onClickBack(): void;
	data: Action;
}

export default function MyTasteView(props: MyTasteProps) {
	return (
		<S.DetailLayout>
			<S.DetailHeader>{props.header}</S.DetailHeader>
			<S.DetailLoadCont>
				{props.data ? (
					<S.DetailImg src={props.data.file_path + props.data.file_masking_name} alt="떡볶이 사진" />
				) : (
					<S.EmptyImg />
				)}
				<ChainStoreView storeData={props.data} borderRadius="0 0 12px 12px" />
			</S.DetailLoadCont>
			<Button onClick={props.onClickBack} />
		</S.DetailLayout>
	);
}

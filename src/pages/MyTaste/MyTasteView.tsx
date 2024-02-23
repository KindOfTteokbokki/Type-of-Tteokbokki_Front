import React from 'react';
import * as S from '../../components/DetailView/style';
import { Button } from '../Popup/style';
import ChainStoreView from '../Loaded/view/ChainStoreView';
import { Action, initialState } from '../../slice/findStoreSlice';

interface MyTasteProps {
	header: string;
	onClickBack(): void;
}

export default function MyTasteView(props: MyTasteProps) {
	const storeData = initialState;

	return (
		<S.DetailLayout>
			<S.DetailHeader>{props.header}</S.DetailHeader>
			<S.DetailLoadCont>
				{storeData ? <S.DetailImg /> : <S.EmptyImg />}
				<ChainStoreView storeData={storeData} borderRadius="0 0 12px 12px" />
			</S.DetailLoadCont>
			<Button onClick={props.onClickBack} />
		</S.DetailLayout>
	);
}

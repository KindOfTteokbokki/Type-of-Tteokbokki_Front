import React, { useState } from 'react';
import MyTasteView from './MyTasteView';
import { constants } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export default function MyTaste() {
	const [data, setData] = useState(['']);
	const navigator = useNavigate();
	const header = constants.MY_TASTE.header;
	const onClickBack = () => {
		navigator(-1);
	};

	return <MyTasteView header={header} onClickBack={onClickBack} />;
}

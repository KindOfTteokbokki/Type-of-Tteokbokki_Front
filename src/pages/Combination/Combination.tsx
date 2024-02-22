import React, { useState } from 'react';
import CombinationView from './CombinationView';
import { constants } from '../../constants/constants';
import icon from '../../assets/아이콘/한줄평.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Combination() {
	const location = useLocation();
	const nickName = location.state.nickName;
	const navigator = useNavigate();
	const [data, setData] = useState(['']);
	const header = nickName + constants.HOME.COMBINATION;
	const onClickBack = () => {
		navigator(-1);
	};

	return <CombinationView iconImg={icon} header={header} onClickBack={onClickBack} data={data} />;
}

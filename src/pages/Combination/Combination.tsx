import React, { useEffect, useState } from 'react';
import CombinationView from './CombinationView';
import { constants } from '../../constants/constants';
import icon from '../../assets/아이콘/한줄평.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGet, usePost } from '../../api/useFetch';
import { baseUrl } from '../../api/useAxios';
import { json } from 'stream/consumers';

export default function Combination() {
	const postFunc = usePost(`${baseUrl}/ViewOneFromCombination`);
	const { id } = useParams();
	const location = useLocation();
	const nickName = location.state.nickName;
	const navigator = useNavigate();

	const [data, setData] = useState(['']);
	const header = nickName + constants.HOME.COMBINATION;
	const onClickBack = () => {
		navigator(-1);
	};

	useEffect(() => {
		postFunc({ combination_seq: id }).then((res: any) => {
			setData(res.data);
		});
	}, []);

	return <CombinationView iconImg={icon} header={header} onClickBack={onClickBack} data={data} />;
}

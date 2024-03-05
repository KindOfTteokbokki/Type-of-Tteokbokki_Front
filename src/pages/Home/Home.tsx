import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios, { baseUrl } from '../../api/useAxios';
import { constants } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { initialState, initializeType } from '../../slice/userPickSlice';
import { usePost, useGet } from '../../api/useFetch';

export default function Home() {
	const navigator = useNavigate();
	const dispatch = useDispatch();
	const postFunc = usePost(`${baseUrl}/getRecommendToPage`);
	const getFunc = useGet(`${baseUrl}/myTaste`);
	const getTitleFunc = useGet(`${baseUrl}/haveTitle`);

	const [myTaste, setMyTaste] = useState([]);
	const [lockTaste, setLockTaste] = useState<any>([]);
	const [homeTitle, setHomeTitle] = useState<string>('');
	const [homeIcon, setHomeIcon] = useState('');
	const [modal, setModal] = useState(true);
	const location = useLocation();

	const [myRecommData, setMyRecommData]: any = useState([]);
	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const onClickMove = () => {
		dispatch(initializeType(initialState));
		navigator('/pick-types');
	};

	const onClickMoveTaste = (id: number) => {
		navigator(`/mytaste/${id}`);
	};

	const onClickDeleteModal = () => {
		setModal(!modal);
	};

	const { response } = useAxios({
		method: 'GET',
		url: `${baseUrl}/combination`,
		headers: {
			accept: '*/*',
		},
	});

	let combiImgList = response?.data;
	const randIndex = Math.floor(Math.random() * 4);

	const postData = {
		pageNum: 0,
		size: 20,
	};

	useEffect(() => {
		if (location?.state.nickName) {
			setModal(true);
		}

		const filteredData: any = [];
		postFunc(postData).then((res: any) => {
			console.log(res.data);
			res.data.map((data: any) => {
				filteredData.push(data);
			});
			setMyRecommData([...filteredData]);
		});

		if (token) {
			getFunc({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }).then((res: any) => {
				if (res.data.length > 3) {
					setMyTaste(res.data.slice(res.data.length - 3));
				} else {
					setMyTaste(res.data);

					const lockArray = new Array(3 - res.data.length);
					setLockTaste([...lockArray]);
				}
			});

			getTitleFunc({
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}).then((res) => {
				if (res.data.haveTitle.length >= 1) {
					setHomeIcon(res.data.haveTitle[0].icorn_file_path + res.data.haveTitle[0].icorn_file_masking_name);
					setHomeTitle(res.data.haveTitle[0].title_name);
				}
			});
		}
	}, []);

	return (
		<HomeView
			onClickMove={onClickMove}
			combiImgList={combiImgList}
			memberName={constants.HOME.NICK_NAME[randIndex]}
			homeTitle={homeTitle}
			homeIcon={homeIcon}
			myRecommData={myRecommData}
			myTaste={myTaste}
			lockTaste={lockTaste}
			onClickMoveTaste={onClickMoveTaste}
			nickName={location?.state.nickName}
			modal={modal}
			onClickDeleteModal={onClickDeleteModal}
		/>
	);
}

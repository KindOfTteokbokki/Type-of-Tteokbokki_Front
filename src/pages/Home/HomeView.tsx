import React from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import character from '../../assets/캐릭터.svg';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import { constants } from '../../constants/constants';
import { RedButton } from '../../components/Button/RedButton/style';
import LoginUserTasteView from './LoginUserTasteView';
import NonLoginUserView from './NonLoginUserView';

interface Props {
	onClickMove(): void;
	combiImgList: any;
	nickName: string;
	myRecommData: string[];
	myTaste: string[];
	lockTaste: string[];
	onClickMoveTaste: (id: number) => void;
}

export default function HomeView(props: Props) {
	const navigator = useNavigate();
	const titleStore = useSelector((state: RootStateType) => {
		return state.title;
	});

	const store = useSelector((state: RootStateType) => {
		return state.store.value.file_path + state.store.value.file_masking_name;
	});

	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	return (
		<>
			<S.Section>
				<S.Title>
					{titleStore.value.title_name ? (
						<S.Icon src={titleStore.value.icorn_file_path + titleStore.value.icorn_file_masking_name} />
					) : (
						<S.Icon />
					)}
					{titleStore.value.title_name}
				</S.Title>
				<S.MainCont>
					<S.MainText>어떤 떡볶이가 먹고싶어?</S.MainText>
					<S.MainImg src={character} />
					<RedButton onClick={props.onClickMove}>고르러 가기!</RedButton>
				</S.MainCont>
				<S.Cont>
					<S.Text>내 입맛</S.Text>
					<S.FlexCont>
						{token ? (
							<LoginUserTasteView
								myTaste={props.myTaste}
								lockTaste={props.lockTaste}
								onClickMoveTaste={props.onClickMoveTaste}
							/>
						) : (
							<NonLoginUserView store={store} />
						)}
					</S.FlexCont>
				</S.Cont>
				<S.Cont>
					<S.MyRecommendCont>
						<S.Text>나도 추천할래</S.Text>
						<S.PlusIcon
							onClick={() => {
								navigator('/recommend');
							}}
						/>
					</S.MyRecommendCont>
					<S.FlexCont>
						{props.myRecommData.map((data: any) => {
							return (
								<S.MyRecommedImg
									src={data?.file_path + data?.file_masking_name}
									onClick={() => {
										navigator(`/recommend/${data.review_seq}`);
									}}
								/>
							);
						})}
					</S.FlexCont>
				</S.Cont>
				<S.Cont>
					<S.Text>
						{props.nickName}
						{constants.HOME.COMBINATION}
					</S.Text>
					<S.FlexCont>
						{props.combiImgList
							? props.combiImgList.map((imageFile: any) => {
									return (
										<S.CombiImg
											src={imageFile?.file_path + imageFile?.file_masking_name}
											onClick={() => {
												navigator(`/combination/${imageFile.combination_seq}`, { state: { nickName: props.nickName } });
											}}
										/>
									);
							  })
							: [1, 2, 3, 4].map(() => {
									return (
										<S.EmptyCombiImg
											onClick={() => {
												navigator('/combination', { state: { nickName: props.nickName } });
											}}
										/>
									);
							  })}
					</S.FlexCont>
				</S.Cont>
			</S.Section>
			<Navigation />
		</>
	);
}

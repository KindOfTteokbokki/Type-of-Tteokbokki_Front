import React, { useState } from 'react';
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
import BasicImg from '../../assets/기본이미지.svg';
import Setting from '../Setting/Setting';
import StartModal from './StartModal';

interface Props {
	onClickMove(): void;
	combiImgList: any;
	memberName: string;
	myRecommData: string[];
	myTaste: string[];
	lockTaste: string[];
	onClickMoveTaste: (id: number) => void;
	homeTitle: string;
	homeIcon: string;
	nickName?: string;
	modal: boolean;
	onClickDeleteModal: () => void;
}

export default function HomeView(props: Props) {
	const navigator = useNavigate();
	const titleStore = useSelector((state: RootStateType) => {
		return state.title;
	});

	const store = useSelector((state: RootStateType) => {
		return state.store.value;
	});

	const token = useSelector((state: RootStateType) => {
		return state.persistedReducer.token.value;
	});

	const newRecommArray = props.myRecommData
		.filter((data: any) => {
			return data.file_masking_name !== null;
		})
		.slice(0, 4);

	return (
		<>
			{props?.nickName && props.modal ? (
				<StartModal nickName={props.nickName} onClickDeleteModal={props.onClickDeleteModal} />
			) : null}
			<S.Section>
				<S.Title>
					{props.homeIcon ? (
						<S.Icon src={props.homeIcon} alt="최근에 받은 칭호 아이콘" />
					) : titleStore.value.title_name ? (
						<S.Icon
							src={titleStore.value.icorn_file_path + titleStore.value.icorn_file_masking_name}
							alt="칭호 아이콘"
						/>
					) : (
						<S.Icon src={BasicImg} alt="기본 가래떡 캐릭터 아이콘" />
					)}
					{props.homeTitle !== '' ? props.homeTitle : titleStore.value.title_name}
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
							<NonLoginUserView store={store} onClickMoveTaste={props.onClickMoveTaste} />
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
						{newRecommArray.map((data: any) => {
							return (
								<S.MyRecommedImg
									src={
										!data.file_masking_name || data.file_masking_name === 'null'
											? BasicImg
											: data.file_path + data.file_masking_name
									}
									onClick={() => {
										navigator(`/recommend/${data.review_seq}`);
									}}
									alt="후기 이미지"
								/>
							);
						})}
					</S.FlexCont>
				</S.Cont>
				<S.Cont>
					<S.Text>
						{props.memberName}
						{constants.HOME.COMBINATION}
					</S.Text>
					<S.FlexCont>
						{props.combiImgList
							? props.combiImgList.map((imageFile: any) => {
									return (
										<S.CombiImg
											src={imageFile?.file_path + imageFile?.file_masking_name}
											onClick={() => {
												navigator(`/combination/${imageFile.combination_seq}`, {
													state: { nickName: props.memberName },
												});
											}}
										/>
									);
							  })
							: [1, 2, 3, 4].map(() => {
									return (
										<S.EmptyCombiImg
											onClick={() => {
												navigator('/combination', { state: { nickName: props.memberName } });
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

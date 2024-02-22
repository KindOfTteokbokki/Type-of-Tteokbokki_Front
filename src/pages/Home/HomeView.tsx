import React from 'react';
import * as S from './style';
import lock from '../../assets/아이콘/자물쇠.svg';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import character from '../../assets/캐릭터.svg';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { constants } from '../../constants/constants';

interface Props {
	onClickMove(): void;
	combiImgList: any;
	nickName: string;
	myRecommData: string[];
}

export default function HomeView(props: Props) {
	const navigator = useNavigate();
	const titleStore = useSelector((state: RootStateType) => {
		return state.title;
	});

	const store = useSelector((state: RootStateType) => {
		return state.store.value.file_path + state.store.value.file_masking_name;
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
					<S.PickButton onClick={props.onClickMove}>고르러 가기!</S.PickButton>
				</S.MainCont>
				<S.Cont>
					<S.Text>내 입맛</S.Text>
					<S.FlexCont>
						{store ? (
							<S.MyTypeImg src={store} alt="떡볶이 사진" />
						) : (
							<S.LockCont>
								<S.LockImg src={lock} />
							</S.LockCont>
						)}
						<S.LockCont>
							<S.LockImg src={lock} />
						</S.LockCont>
						<S.LockCont>
							<S.LockImg src={lock} />
						</S.LockCont>
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
						{props.myRecommData.map((url) => {
							return <S.MyRecommedImg src={url} />;
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
												navigator('/combination');
											}}
										/>
									);
							  })
							: [1, 2, 3, 4].map(() => {
									return <S.EmptyCombiImg />;
							  })}
					</S.FlexCont>
				</S.Cont>
			</S.Section>
			<Navigation />
		</>
	);
}

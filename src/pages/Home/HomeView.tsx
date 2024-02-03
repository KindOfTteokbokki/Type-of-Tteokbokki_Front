import React from 'react';
import * as S from './style';
import lock from '../../assets/아이콘/자물쇠.svg';
import food from '../../assets/tteokbokki.png';
import icon from '../../assets/Hot face.svg';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import character from '../../assets/캐릭터.svg';

interface Props {
	onClickMove(): void;
	combiImgList: any;
	nickName: string;
}

export default function HomeView(props: Props) {
	const titleStore = useSelector((state: RootStateType) => {
		return state.title;
	});

	const store = useSelector((state: RootStateType) => {
		return state.store.value.file_path + state.store.value.file_masking_name;
	});

	console.log(titleStore);
	console.log(store);

	return (
		<S.Section>
			<S.Title>
				<S.Icon src={titleStore.value.icorn_file_path + titleStore.value.icorn_file_masking_name} />
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
					<S.MyTypeImg src={store} alt="떡볶이 사진" />
					<S.LockCont>
						<S.LockImg src={lock} />
					</S.LockCont>
					<S.LockCont>
						<S.LockImg src={lock} />
					</S.LockCont>
				</S.FlexCont>
			</S.Cont>
			<S.Cont>
				<S.Text>나도 추천할래</S.Text>
				<S.FlexCont>
					<S.MyRecommedImg />
					<S.MyRecommedImg />
					<S.MyRecommedImg />
					<S.MyRecommedImg />
				</S.FlexCont>
			</S.Cont>
			<S.Cont>
				<S.Text>{props.nickName}가 추천하는 꿀조합</S.Text>
				<S.FlexCont>
					{props.combiImgList
						? props.combiImgList.map((imageFile: any) => {
								return <S.CombiImg src={imageFile?.file_path + imageFile?.file_masking_name} />;
						  })
						: [1, 2, 3, 4].map(() => {
								return <S.CombiImg />;
						  })}
				</S.FlexCont>
			</S.Cont>
		</S.Section>
	);
}

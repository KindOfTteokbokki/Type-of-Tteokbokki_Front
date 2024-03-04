import React, { useState } from 'react';
import * as S from '../style';
import RecommendWrite from '../RecommendWrite';
import { useNavigate } from 'react-router-dom';
import RecommendList from '../RecommendList';
import Navigation from '../../../components/Navigation/Navigation';

export default function RecommendView() {
	const [keyboard, setKeyBoard] = useState(false);

	const navigator = useNavigate();

	const renderWrite = () => {
		if (keyboard) {
			return <RecommendWrite setKeyBoard={setKeyBoard} />;
		}
	};

	return (
		<>
			<S.Layout>
				<S.Head>
					<S.BackButton
						onClick={() => {
							navigator(-1);
						}}
					/>
					<S.RecommHeadText>나도 추천할래</S.RecommHeadText>
				</S.Head>
				<S.Main>
					<S.Message>
						어떡 이용자들이 <S.BoldText>직접 먹어보고 추천</S.BoldText>하는 <S.BoldText>내돈내산</S.BoldText>
						후기들이야!
					</S.Message>
					<RecommendList />
				</S.Main>
				<S.Button
					onClick={() => {
						setKeyBoard(true);
					}}
				/>

				{renderWrite()}
			</S.Layout>
			<Navigation />
		</>
	);
}

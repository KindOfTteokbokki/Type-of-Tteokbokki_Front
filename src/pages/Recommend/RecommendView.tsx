import React, { useState } from 'react';
import * as S from './style';
import { HeadText, MessageLayout } from '../PickTypes/style';
import RecommendWrite from './RecommendWrite';

export default function RecommendView() {
	const [text, setText] = useState('');

	const renderWrite = () => {
		return <RecommendWrite />;
	};

	return (
		<S.Layout>
			<S.Head>
				<S.backButton />
				<HeadText>나도 추천할래</HeadText>
			</S.Head>
			<S.Main>
				<S.Message>
					어떡 이용자들이 <S.BoldText>먹어보고</S.BoldText> 추천하는 <S.BoldText>내돈내산</S.BoldText> 후기들이야!
				</S.Message>
				<S.RecommCont>
					{[1, 2, 3, 4, 5, 6].map(() => {
						return (
							<S.RecommList>
								<S.RecommImg />
								<S.RecommText />
							</S.RecommList>
						);
					})}
				</S.RecommCont>
			</S.Main>
			<S.Button onClick={renderWrite} />
		</S.Layout>
	);
}

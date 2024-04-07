import React, { useState } from 'react';
import * as S from '../style';
import RecommendWrite from '../RecommendWrite';
import { useNavigate } from 'react-router-dom';
import RecommendList from '../RecommendList';
import Navigation from '../../../components/Navigation/Navigation';

interface RecommendViewProps {
	header: string;
	header2: string[];
}

export default function RecommendView(props: RecommendViewProps) {
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
					<S.RecommHeadText>{props.header}</S.RecommHeadText>
				</S.Head>
				<S.Main>
					<S.Message>
						<S.P>
							{props.header2[0]}
							<S.BoldText>{props.header2[1]}</S.BoldText>
							{props.header2[2]}
						</S.P>
						<S.P>
							<S.BoldText>{props.header2[3]}</S.BoldText>
							{props.header2[4]}
						</S.P>
					</S.Message>
					<RecommendList setKeyBoard={setKeyBoard} />
				</S.Main>
				{renderWrite()}
			</S.Layout>

			<Navigation />
		</>
	);
}

import React from 'react';
import * as S from './style';
import { Icon } from '../Title/style';
import { BackButton } from '../Recommend/style';
import Navigation from '../../components/Navigation/Navigation';

interface MyPageProps {
	header: string;
}

export default function MyPageView(props: MyPageProps) {
	return (
		<>
			<S.Section>
				<S.Header role="header">
					<S.Button />
					{props.header}
				</S.Header>
				<S.Main>
					<S.MyInfoAndReviewCont>
						<S.MyNameAndButtonCont>
							<S.Name>개구리</S.Name>
							<S.editButton>프로필 수정</S.editButton>
						</S.MyNameAndButtonCont>
						<S.IconCont>
							<S.Li>
								<S.Img />
							</S.Li>
							<S.Border margin="0 30px 0 32px" />
							<S.Li>
								<S.Img />
							</S.Li>
							<S.Border margin="0 32px 0 30px" />
							<S.Li>
								<S.Img />
							</S.Li>
						</S.IconCont>
					</S.MyInfoAndReviewCont>
				</S.Main>
			</S.Section>
			<Navigation />
		</>
	);
}

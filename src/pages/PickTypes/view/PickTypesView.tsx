import React from 'react';
import * as S from '../style';
import { Props } from '../PickTypes';
import PickTypesList from '../PickTypesList';
import BigRedButton from '../../../components/Button/BigRedButton/BigRedButton';

export default function PickTypesView(props: Props) {
	const onClickScroll = (index: number) => {
		window.scrollTo(0, index);
	};

	return (
		<S.Cont>
			<S.Layout id="pickType">
				<S.Header>
					<S.HeadText>{props.headerText}</S.HeadText>
				</S.Header>
				<S.Main>
					<S.MessageLayout>{props.alertText}</S.MessageLayout>
					<S.FlexLayout>
						<PickTypesList onClickScroll={onClickScroll} onClickDelete={props.onClickDelete} />
					</S.FlexLayout>
				</S.Main>
				<S.ResultLayout>
					{props.renderButton()}
					<S.ResultButtonLayout>
						<BigRedButton text={props.selectText} onclick={props.onClickMove} />
					</S.ResultButtonLayout>
				</S.ResultLayout>
			</S.Layout>
		</S.Cont>
	);
}

import React, { useEffect } from 'react';
import * as S from './style';
import Logo from '../../assets/어떡로고.svg';
import { constants } from '../../constants/constants';

interface Setting {
	nickName: string;
	checkValidName: () => boolean;
	onChangeName: (value: string) => void;
	valid: boolean;
	onChangeValid: (value: boolean) => void;
	duplicated: boolean;
	onClickMovehome: () => void;
}

export default function SettingView(props: Setting) {
	return (
		<S.Layout>
			<S.LogoImg src={Logo} alt="로고" />
			<S.LogoHeader>
				{constants.SETTING.header[0]}
				<br />
				{constants.SETTING.header[1]}
			</S.LogoHeader>
			<S.Input
				placeholder={constants.SETTING.placeholder}
				onChange={(e) => {
					props.onChangeName(e.target.value);
				}}
			/>
			<S.ErrorName>
				{!props.valid ? constants.SETTING.ERROR_INVALID : props.duplicated ? constants.SETTING.ERROR_DUPLICATE : null}
			</S.ErrorName>

			{props.valid && !props.duplicated ? (
				<S.RedShadowButton onClick={props.onClickMovehome} type="submit">
					{constants.SETTING.button}
				</S.RedShadowButton>
			) : (
				<S.GrayShadowButton onClick={} type="submit">
					{constants.SETTING.button}
				</S.GrayShadowButton>
			)}
		</S.Layout>
	);
}

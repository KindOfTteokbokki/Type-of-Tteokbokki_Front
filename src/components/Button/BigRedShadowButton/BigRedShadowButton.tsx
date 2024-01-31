import React from 'react';
import * as S from './style';

export type TextType = {
	text: string;
	onclick(): void;
};

export default function BigRedShadowButton(props: TextType) {
	return <S.shadowButton onClick={props.onclick}>{props.text}</S.shadowButton>;
}

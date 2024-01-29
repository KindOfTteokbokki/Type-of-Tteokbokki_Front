import React from 'react';
import * as S from './style';

type TextType = {
	text: string;
	onclick(): void;
};

export default function BigRedButton(props: TextType) {
	return <S.Button onClick={props.onclick}>{props.text}</S.Button>;
}

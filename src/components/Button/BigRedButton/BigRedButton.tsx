import React from 'react';
import * as S from './style';

type TextType = {
	text: string;
};

export default function BigRedButton({ text }: TextType): React.ReactElement {
	return <S.Button>{text}</S.Button>;
}

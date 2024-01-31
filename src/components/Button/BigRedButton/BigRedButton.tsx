import React from 'react';
import { TextType } from '../BigRedShadowButton/BigRedShadowButton';
import { Button } from './style';

export default function BigRedButton(props: TextType) {
	return <Button onClick={props.onclick}>{props.text}</Button>;
}

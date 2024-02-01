import React from 'react';
import styled from 'styled-components';
import { WhiteButton } from './style';

interface Props {
	text: string;
	onclick: () => void;
}

export default function BigWhiteButton(props: Props) {
	return <WhiteButton onClick={props.onclick}>{props.text}</WhiteButton>;
}

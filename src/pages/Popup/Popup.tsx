import React from 'react';
import PopupView from './PopupView';
import { useNavigate } from 'react-router-dom';

interface Props {
	popUpHeader: string;
	popUpMessage: string;
}

export default function Popup(props: Props) {
	const navigator = useNavigate();

	const onClickMove = () => {
		navigator('/home');
	};

	return <PopupView popUpHeader={props.popUpHeader} popUpMessage={props.popUpMessage} onClickMove={onClickMove} />;
}

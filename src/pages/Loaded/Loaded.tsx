import React from 'react';
import LoadedView from './LoadedView';
import { constants } from '../../constants/constants';

export interface Props {
	loadedHeader: string;
	loadedMessage: string;
}

export default function Loaded() {
	return <LoadedView loadedHeader={constants.LOADED.header} loadedMessage={constants.LOADED.message} />;
}

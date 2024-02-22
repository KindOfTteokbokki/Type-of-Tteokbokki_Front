import React, { useState } from 'react';
import DetailView from '../../components/DetailView/DetailView';
import { DetailProps } from '../../components/DetailView/DetailView';

export default function CombinationView(props: DetailProps) {
	return <DetailView data={props.data} header={props.header} onClickBack={props.onClickBack} iconImg={props.iconImg} />;
}

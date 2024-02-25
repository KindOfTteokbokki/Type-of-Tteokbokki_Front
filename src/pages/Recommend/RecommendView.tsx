import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { HeadText, MessageLayout } from '../PickTypes/style';
import RecommendWrite from './RecommendWrite';
import { usePost } from '../../api/useFetch';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../api/useAxios';

export default function RecommendView() {
	const postFunc = usePost(`${baseUrl}/getRecommendToPage`);
	const [keyboard, setKeyBoard] = useState(false);
	const [reviewData, setReviewData] = useState([]);
	const navigator = useNavigate();

	const renderWrite = () => {
		if (keyboard) {
			return <RecommendWrite setKeyBoard={setKeyBoard} />;
		}
	};

	const postData = {
		pageNum: 0,
		size: 15,
	};

	useEffect(() => {
		postFunc(postData).then((res) => {
			setReviewData(res?.data);
		});
	}, []);

	return (
		<S.Layout>
			<S.Head>
				<S.BackButton
					onClick={() => {
						navigator(-1);
					}}
				/>
				<S.RecommHeadText>나도 추천할래</S.RecommHeadText>
			</S.Head>
			<S.Main>
				<S.Message>
					어떡 이용자들이 <S.BoldText>직접 먹어보고 추천</S.BoldText>하는 <S.BoldText>내돈내산</S.BoldText> 후기들이야!
				</S.Message>
				<S.RecommCont>
					{reviewData.map((data: any) => {
						console.log(data.content);
						return (
							<S.RecommList>
								{data?.file_masking_name === null ? (
									<S.ReCommOnlyText>{data.content}</S.ReCommOnlyText>
								) : (
									<>
										<S.RecommImg src={data?.file_path + data?.file_masking_name} />
										<S.RecommText>{data?.content}</S.RecommText>
									</>
								)}
							</S.RecommList>
						);
					})}
				</S.RecommCont>
			</S.Main>
			<S.Button
				onClick={() => {
					setKeyBoard(true);
				}}
			/>
			{renderWrite()}
		</S.Layout>
	);
}

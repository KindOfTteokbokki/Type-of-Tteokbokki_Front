import * as S from './style';
import lock from '../../assets/아이콘/자물쇠.svg';
import { Action } from '../../slice/findStoreSlice';

interface NonLoginUserProps {
	store: Action;
	onClickMoveTaste: (id: number) => void;
}

export default function NonLoginUserView(props: NonLoginUserProps) {
	const lockArray = new Array(3);
	return (
		<>
			{props.store ? (
				<>
					<S.MyTypeImg
						src={props.store.file_path + props.store.file_masking_name}
						alt="떡볶이 사진"
						onClick={() => {
							props.onClickMoveTaste(props.store.store_seq);
						}}
					/>
					<S.LockCont>
						<S.LockImg src={lock} alt="자물쇠 아이콘" />
					</S.LockCont>
					<S.LockCont>
						<S.LockImg src={lock} alt="자물쇠 아이콘" />
					</S.LockCont>
				</>
			) : (
				lockArray.map(() => {
					return (
						<S.LockCont>
							<S.LockImg src={lock} alt="자물쇠 아이콘" />
						</S.LockCont>
					);
				})
			)}
		</>
	);
}

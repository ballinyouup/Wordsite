import { FC } from "react";

import styles from "@/styles/LoadingWord.module.css";

const LoadingWord: FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.loadingCircle}></div>
		</div>
	);
};

export default LoadingWord;

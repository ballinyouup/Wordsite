import { FC } from "react";
import styles from "@/styles/NotFound.module.css";

const NotFound: FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<h1>Not Found. Search Again!</h1>
			<img src="https://cdn-icons-png.flaticon.com/512/5680/5680361.png" />
			<p>*API has less definitions than list of words</p>
		</div>
	);
};

export default NotFound;

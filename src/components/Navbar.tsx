import Link from "next/link";
import { FC } from "react";
import styles from "@/styles/Navbar.module.css";

const Navbar: FC = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<Link href="/"> Home </Link>
		</div>
	);
};

export default Navbar;

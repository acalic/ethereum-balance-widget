import tatumLogo from "../../assets/images/tatum.jpeg";
import EthBalanceForm from "../../components/EthBalanceForm/EthBalanceForm";
import styles from "./Home.module.scss";

export function Home() {
	return (
		<div className={styles.home}>
			<a href="https://tatum.io" target="_blank" rel="noopener noreferrer">
				<img
					src={tatumLogo}
					alt="Tatum logo"
					className={styles.logo}
					height="160"
					width="160"
				/>
			</a>
			<h1 className={styles.title}>
				<span className={styles.gradientMask}>Tatum</span>
				ETH Balance Widget
			</h1>
			<EthBalanceForm />
		</div>
	);
}

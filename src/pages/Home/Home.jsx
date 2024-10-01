import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.home}>
			{/* Home */}
			<Sidebar />
			<div className={styles.homeContainer}>
				<Navbar />
				<div className={styles.widgets}>
					<Widget />
					<Widget />
					<Widget />
					<Widget />
				</div>
			</div>
		</div>
	);
};

export default Home;

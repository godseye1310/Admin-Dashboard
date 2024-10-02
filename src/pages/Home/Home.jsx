import Chart from "../../components/Charts/Chart";
import FeaturedChart from "../../components/Charts/FeaturedChart";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Tables/Tables";
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
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earnings" />
					<Widget type="balance" />
				</div>
				<div className={styles.charts}>
					<FeaturedChart />
					<Chart />
				</div>

				<div className={styles.tableContainer}>
					<h3 className={styles.tableTitle}>Latest Transcations</h3>
					<Tables />
				</div>
			</div>
		</div>
	);
};

export default Home;

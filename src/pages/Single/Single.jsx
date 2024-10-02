import Chart from "../../components/Charts/Chart";
import Tables from "../../components/Tables/Tables";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Single.module.scss";

const Single = () => {
	return (
		<div className={styles.single}>
			<Sidebar />
			<div className={styles.singleContainer}>
				<Navbar />

				<div className={styles.top}>
					<div className={styles.left}>
						<button className={styles.editButton}>Edit</button>
						<h1 className={styles.title}>Information</h1>
						<div className={styles.item}>
							<img
								src="https://s4.anilist.co/file/anilistcdn/character/large/b162248-57Xgk6EmwKRQ.png"
								alt=""
								className={styles.itemImg}
							/>
							<div className={styles.details}>
								<h1 className={styles.itemTitle}>Jane Delta</h1>
								<div className={styles.detailItem}>
									<span className={styles.itemKey}>
										Email:
									</span>
									<span className={styles.itemValue}>
										deltadoggo@gmail.com
									</span>
								</div>
								<div className={styles.detailItem}>
									<span className={styles.itemKey}>
										Phone:
									</span>
									<span className={styles.itemValue}>
										+1 369 45 69
									</span>
								</div>
								<div className={styles.detailItem}>
									<span className={styles.itemKey}>
										Address:
									</span>
									<span className={styles.itemValue}>
										Elton St. 234 Garden Shd. NewYork
									</span>
								</div>
								<div className={styles.detailItem}>
									<span className={styles.itemKey}>
										Country:
									</span>
									<span className={styles.itemValue}>
										Midgar US
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<Chart title="User Spending (Last Six Months)" />
					</div>
				</div>
				<div className={styles.bottom}>
					<h1 className={styles.title}>Last Tranccations</h1>
					<Tables />
				</div>
			</div>
		</div>
	);
};

export default Single;

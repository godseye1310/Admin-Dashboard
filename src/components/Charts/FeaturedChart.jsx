import {
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
	MoreVert,
} from "@mui/icons-material";
import styles from "./FeaturedChart.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function FeaturedChart() {
	return (
		<div className={styles.featured}>
			<div className={styles.top}>
				<h1 className={styles.title}>Total Revenue</h1>
				<MoreVert fontSize="smalll" />
			</div>

			<div className={styles.bottom}>
				<div className={styles.featuredChart}>
					<CircularProgressbar
						value={70}
						text="70%"
						strokeWidth={3}
					/>
				</div>
				<p className={styles.title}>Totla sales made today</p>
				<p className={styles.amount}>$420</p>
				<p className={styles.desc}>
					Previous transcations processing. Last payment may not be
					included.
				</p>

				<div className={styles.summary}>
					<div className={styles.item}>
						<div className={styles.itemTitle}>Target</div>
						<div
							className={`${styles.itemResult} ${styles.negative}`}
						>
							<KeyboardArrowDownRounded fontSize="small" />
							<div className={styles.resultAmount}>$2.4K</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.itemTitle}>Last Month</div>
						<div
							className={`${styles.itemResult} ${styles.positive}`}
						>
							<KeyboardArrowUpRounded fontSize="small" />
							<div className={styles.resultAmount}>$3.6K</div>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.itemTitle}>Last Month</div>
						<div
							className={`${styles.itemResult} ${styles.positive}`}
						>
							<KeyboardArrowUpRounded fontSize="small" />
							<div className={styles.resultAmount}>$15.3K</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturedChart;

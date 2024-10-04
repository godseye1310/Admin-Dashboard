import {
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
	MoreVert,
} from "@mui/icons-material";
import "./FeaturedChart.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function FeaturedChart() {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVert fontSize="smalll" />
			</div>

			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar
						value={70}
						text="70%"
						strokeWidth={3}
					/>
				</div>
				<p className="title">Totla sales made today</p>
				<p className="amount">$420</p>
				<p className="desc">
					Previous transcations processing. Last payment may not be
					included.
				</p>

				<div className="summary">
					<div className="item">
						<div className="itemTitle">Target</div>
						<div className={`itemResult negative`}>
							<KeyboardArrowDownRounded fontSize="small" />
							<div className="resultAmount">$2.4K</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last Month</div>
						<div className={`itemResult positive`}>
							<KeyboardArrowUpRounded fontSize="small" />
							<div className="resultAmount">$3.6K</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Last Month</div>
						<div className={`itemResult positive`}>
							<KeyboardArrowUpRounded fontSize="small" />
							<div className="resultAmount">$15.3K</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturedChart;

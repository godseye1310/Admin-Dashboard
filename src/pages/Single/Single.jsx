import Chart from "../../components/Charts/Chart";
import Tables from "../../components/Tables/Tables";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Single.scss";

const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />

				<div className="top">
					<div className="left">
						<button className="editButton">Edit</button>
						<h1 className="title">Information</h1>
						<div className="item">
							<img
								src="https://s4.anilist.co/file/anilistcdn/character/large/b162248-57Xgk6EmwKRQ.png"
								alt=""
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">Jane Delta</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">
										deltadoggo@gmail.com
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">
										+1 369 45 69
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">
										Elton St. 234 Garden Shd. NewYork
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country:</span>
									<span className="itemValue">Midgar US</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart title="User Spending (Last Six Months)" />
					</div>
				</div>
				<div className="bottom">
					<h1 className="title">Last Tranccations</h1>
					<Tables />
				</div>
			</div>
		</div>
	);
};

export default Single;

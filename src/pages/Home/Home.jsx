import Chart from "../../components/Charts/Chart";
import FeaturedChart from "../../components/Charts/FeaturedChart";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tables from "../../components/Tables/Tables";
import Widget from "../../components/Widget/Widget";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			{/* Home */}
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earnings" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<FeaturedChart />
					<Chart title="Last 6 Months (Revenue)" />
				</div>

				<div className="tableContainer">
					<h3 className="tableTitle">Latest Transcations</h3>
					<Tables />
				</div>
			</div>
		</div>
	);
};

export default Home;

import DataTable from "../../components/DataTable/DataTable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./List.scss";

const List = ({ title }) => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<DataTable title={title} />
			</div>
		</div>
	);
};

export default List;

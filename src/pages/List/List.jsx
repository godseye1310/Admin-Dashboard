import DataTable from "../../components/DataTable/DataTable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./List.module.scss";

const List = ({ title }) => {
	return (
		<div className={styles.list}>
			<Sidebar />
			<div className={styles.listContainer}>
				<Navbar />
				<DataTable title={title} />
			</div>
		</div>
	);
};

export default List;

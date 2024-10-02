import DataTable from "../../components/DataTable/DataTable";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./List.module.scss";

const List = () => {
	return (
		<div className={styles.list}>
			<Sidebar />
			<div className={styles.listContainer}>
				<Navbar />
				<DataTable />
			</div>
		</div>
	);
};

export default List;

import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { userRows, userColumns } from "../../constants/datatable-src";
import { Link } from "react-router-dom";

const DataTable = ({ title }) => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="cellAction">
						<Link
							to="/users/test"
							style={{ textDecoration: "none" }}
						>
							<div className="viewButton">View</div>
						</Link>
						<div className="deleteButton">Delete</div>
					</div>
				);
			},
		},
	];

	const paginationModel = { page: 0, pageSize: 10 };

	return (
		<div className="datatable">
			<div className="datatableTitle">
				<h5>All {title}</h5>
				<Link
					to={`/${title}/new`}
					style={{ textDecoration: "none" }}
					className="link"
				>
					Add New
				</Link>
			</div>
			<Paper sx={{ height: "100%", width: "100%" }}>
				<DataGrid
					className="datagrid"
					rows={userRows}
					columns={userColumns.concat(actionColumn)}
					initialState={{ pagination: { paginationModel } }}
					pageSizeOptions={[5, 10, 15]}
					checkboxSelection
					sx={{ border: 0 }}
				/>
			</Paper>
		</div>
	);
};

export default DataTable;

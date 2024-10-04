import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { userRows, userColumns } from "../../constants/datatable-src";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = ({ title }) => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link
							to="/users/test"
							style={{ textDecoration: "none" }}
						>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
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
					rows={data}
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

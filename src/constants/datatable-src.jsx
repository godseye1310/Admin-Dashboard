//temporary static data

export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img
						className="cellImg"
						src={params.row.img}
						alt="avatar"
					/>
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},

	{
		field: "age",
		headerName: "Age",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell: (params) => {
			return (
				<div className="cellWithStatus">
					<div className={`cellStatus ${params.row.status}`}>
						{params.row.status}
					</div>
				</div>
			);
		},
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		status: "Active",
		email: "snow1@gmail.com",
		age: 35,
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "jamie@gmail.com",
		status: "Cancel",
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "lannisters@gmail.com",
		status: "Pending",
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "strak@gmail.com",
		status: "Active",
		age: 16,
	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "housetargaryen@gmail.com",
		status: "Cancel",
		age: 22,
	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "snow6n@gmail.com",
		status: "Active",
		age: 15,
	},
	{
		id: 7,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "fordw@gmail.com",
		status: "Cancel",
		age: 44,
	},
	{
		id: 8,
		username: "Frances",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "frances@gmail.com",
		status: "Active",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "roxie@gmail.com",
		status: "Pending",
		age: 65,
	},
	{
		id: 10,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "cumroxie@gmail.com",
		status: "Active",
		age: 65,
	},
];

// import styles from "./DataTable.module.scss"; // Import your styles

// export const userColumns = [
//   { field: "id", headerName: "ID", width: 70 },
//   {
//     field: "user",
//     headerName: "User",
//     width: 230,
//     renderCell: (params) => {
//       return (
//         <div className=cellWithImg}> {/* Use styles here */}
//           <img className=cellImg} src={params.row.img} alt="avatar" /> {/* Use styles here */}
//           {params.row.username}
//         </div>
//       );
//     },
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     width: 230,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     width: 100,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 160,
//     renderCell: (params) => {
//       return (
//         <div className={`$cellWithStatus} ${styles[params.row.status]}`}> {/* Use dynamic class with styles */}
//           {params.row.status}
//         </div>
//       );
//     },
//   },
// ];

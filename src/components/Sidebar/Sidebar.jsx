// import { Dashboard } from "@mui/icons-material";
import "./Sidebar.scss";
import Dashboard from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../../context/theme-context";

const Sidebar = () => {
	const { dispatch } = useTheme();
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">JSXAdmin</span>
				</Link>
			</div>
			<hr />

			<nav className="center">
				<ul>
					<p className="title">MAIN</p>
					<NavLink
						to="/"
						className="link"
						style={{ textDecoration: "none" }}
					>
						<li>
							<Dashboard className="icon" />
							<span>Dashboard</span>
						</li>
					</NavLink>
					<p className="title">LISTS</p>
					<NavLink
						to="/users"
						style={{ textDecoration: "none" }}
						className="link"
					>
						<li>
							<PersonOutlineOutlinedIcon className="icon" />
							<span>Users</span>
						</li>
					</NavLink>
					<NavLink
						to="/products"
						style={{ textDecoration: "none" }}
						className="link"
					>
						<li>
							<StoreRoundedIcon className="icon" />
							<span>Products</span>
						</li>
					</NavLink>
					<li>
						<CreditCardIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Deleviry</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<InsertChartIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneOutlinedIcon className="icon" />
						<span>Notification</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlinedIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className="icon" />
						<span>Logs</span>
					</li>
					<p className="title">USER</p>
					<li>
						<SettingsApplicationsIcon className="icon" />
						<span>Settings</span>
					</li>
					<li>
						<AccountCircleRoundedIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</nav>
			<div className="bottom">
				<div
					className="themeOptions"
					onClick={() => dispatch({ type: "LIGHT" })}
				></div>
				<div
					className="themeOptions"
					onClick={() => dispatch({ type: "DARK" })}
				></div>
				{/* <div className=themeOptions}></div> */}
			</div>
		</div>
	);
};

export default Sidebar;

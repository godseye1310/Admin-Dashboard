// import { Dashboard } from "@mui/icons-material";
import styles from "./Sidebar.module.scss";
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

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.top}>
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className={styles.logo}>JSXAdmin</span>
				</Link>
			</div>
			<hr />

			<nav className={styles.center}>
				<ul>
					<p className={styles.title}>MAIN</p>
					<NavLink
						to="/"
						className={styles.link}
						style={{ textDecoration: "none" }}
					>
						<li>
							<Dashboard className={styles.icon} />
							<span>Dashboard</span>
						</li>
					</NavLink>
					<p className={styles.title}>LISTS</p>
					<NavLink
						to="/users"
						style={{ textDecoration: "none" }}
						className={styles.link}
					>
						<li>
							<PersonOutlineOutlinedIcon
								className={styles.icon}
							/>
							<span>Users</span>
						</li>
					</NavLink>
					<NavLink
						to="/products"
						style={{ textDecoration: "none" }}
						className={styles.link}
					>
						<li>
							<StoreRoundedIcon className={styles.icon} />
							<span>Products</span>
						</li>
					</NavLink>
					<li>
						<CreditCardIcon className={styles.icon} />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className={styles.icon} />
						<span>Deleviry</span>
					</li>
					<p className={styles.title}>USEFUL</p>
					<li>
						<InsertChartIcon className={styles.icon} />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneOutlinedIcon
							className={styles.icon}
						/>
						<span>Notification</span>
					</li>
					<p className={styles.title}>SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlinedIcon
							className={styles.icon}
						/>
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className={styles.icon} />
						<span>Logs</span>
					</li>
					<p className={styles.title}>USER</p>
					<li>
						<SettingsApplicationsIcon className={styles.icon} />
						<span>Settings</span>
					</li>
					<li>
						<AccountCircleRoundedIcon className={styles.icon} />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppIcon className={styles.icon} />
						<span>Logout</span>
					</li>
				</ul>
			</nav>
			<div className={styles.bottom}>
				<div className={styles.themeOptions}></div>
				<div className={styles.themeOptions}></div>
				{/* <div className={styles.themeOptions}></div> */}
			</div>
		</div>
	);
};

export default Sidebar;

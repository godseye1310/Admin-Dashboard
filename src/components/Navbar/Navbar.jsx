import "./Navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import useTheme from "../../context/theme-context";

const Navbar = () => {
	const { dispatch } = useTheme();
	return (
		<nav className="navbar">
			<div className="wrapper">
				<div className="search">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
					/>
					<SearchRoundedIcon />
				</div>

				<ul className="items">
					<li className="item">
						<LanguageOutlinedIcon className="icon" />
						English
					</li>
					<li className="item">
						<DarkModeOutlinedIcon
							className="icon theme"
							onClick={() => dispatch({ type: "TOGGLE" })}
						/>
					</li>
					<li className="item">
						<FullscreenExitOutlinedIcon className="icon" />
					</li>
					<li className="item">
						<NotificationsNoneOutlinedIcon className="icon" />
						<div className="counter">2</div>
					</li>
					<li className="item">
						<ChatBubbleOutlineOutlinedIcon className="icon" />
						<div className="counter">3</div>
					</li>
					<li className="item">
						<ListOutlinedIcon className="icon" />
					</li>

					<li>
						<img
							src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6489262-l9VwntAmYHM1.png"
							alt="Avatar"
							className="avatar"
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

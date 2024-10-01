import styles from "./Navbar.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.wrapper}>
				<div className={styles.search}>
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search..."
					/>
					<SearchRoundedIcon />
				</div>

				<ul className={styles.items}>
					<li className={styles.item}>
						<LanguageOutlinedIcon className={styles.icon} />
						English
					</li>
					<li className={styles.item}>
						<DarkModeOutlinedIcon className={styles.icon} />
					</li>
					<li className={styles.item}>
						<FullscreenExitOutlinedIcon className={styles.icon} />
					</li>
					<li className={styles.item}>
						<NotificationsNoneOutlinedIcon
							className={styles.icon}
						/>
						<div className={styles.counter}>2</div>
					</li>
					<li className={styles.item}>
						<ChatBubbleOutlineOutlinedIcon
							className={styles.icon}
						/>
						<div className={styles.counter}>3</div>
					</li>
					<li className={styles.item}>
						<ListOutlinedIcon className={styles.icon} />
					</li>

					<li>
						<img
							src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6489262-l9VwntAmYHM1.png"
							alt="Avatar"
							className={styles.avatar}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

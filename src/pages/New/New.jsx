import { DriveFolderUpload } from "@mui/icons-material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./New.module.scss";
import { useState } from "react";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	console.log(file);

	return (
		<div className={styles.new}>
			<Sidebar />
			<div className={styles.newContainer}>
				<Navbar />
				<div className={styles.top}>
					<h1 className={styles.title}>{title}</h1>
				</div>
				<div className={styles.bottom}>
					<div className={styles.left}>
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt="add"
						/>
					</div>
					<div className={styles.right}>
						<form>
							<div className={styles.formInput}>
								<label htmlFor="file">
									Image:{" "}
									<DriveFolderUpload
										className={styles.icon}
									/>
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: "none" }}
									required
								/>
							</div>
							{inputs.map((input) => (
								<div
									key={input.id}
									className={styles.formInput}
								>
									<label htmlFor="">{input.label}</label>
									<input
										type={input.type}
										placeholder={input.placeholder}
										required
									/>
								</div>
							))}

							<div className={styles.btn}>
								<button type="submit">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;

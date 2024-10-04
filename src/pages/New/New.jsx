import { DriveFolderUpload } from "@mui/icons-material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./New.scss";
import { useState } from "react";

const New = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	console.log(file);

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1 className="title">{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt="add"
						/>
					</div>
					<div className="right">
						<form>
							<div className="formInput">
								<label htmlFor="file">
									Image:{" "}
									<DriveFolderUpload className="icon" />
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
								<div key={input.id} className="formInput">
									<label htmlFor="">{input.label}</label>
									<input
										type={input.type}
										placeholder={input.placeholder}
										required
									/>
								</div>
							))}

							<div className="btn">
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

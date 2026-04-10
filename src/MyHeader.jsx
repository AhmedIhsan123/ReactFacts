import "./MyHeader.css";
import image from "./assets/react.svg";

export default function () {
	return (
		<>
			<div className="NavigationContainer">
				<img id="react-img" src={image}></img>
				<h1 id="navbar-title">React Facts</h1>
			</div>
		</>
	);
}

import "./Header.css";
import image from "./assets/hero.png";

export default function () {
	return (
		<>
			<div className="NavigationContainer">
				<img src={image} width="40px"></img>
				<h1>React Facts</h1>
			</div>
		</>
	);
}

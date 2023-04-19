import { useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
	const [num, setNum] = useState(0);
	const [faceShowFlag, setFaceShowFlag] = useState(false);

	const onClickCountUp = () => {
		setNum(num + 1);
	};

	const onClickSwitchShowFlag = () => {
		setFaceShowFlag(!faceShowFlag);
	};

	return (
		<>
			<h1 style={{ color: "red" }}>こんにちは〜</h1>
			<ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
			<ColorfulMessage color="pink">元気です!</ColorfulMessage>
			<button onClick={onClickCountUp}>カウントアップ！</button>
			<br />
			<button onClick={onClickSwitchShowFlag}>on/off</button>
			<p>{num}</p>
			{faceShowFlag && <p>(｀・ω・´)</p>}
		</>
	);
};

export default App;

import { useState } from "react"

export default function ButtonCounter(){
	const [num, setNum] = useState(0);
	function counter(){
			setNum(num+1)
		}
	return(
		<div>
			<p>Button clicked {num} times</p>
			<button onClick={counter}>Submit</button>
		</div>
	)
}
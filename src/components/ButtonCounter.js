import { useState } from "react"

export default function ButtonCounter(){
	const [num, setNum] = useState(0);
	function counter(){
			setNum(num+1)
		}
	return(
		<div>
			<p onClick={counter}>Button click {num} times</p>
		</div>
	)
}
import { TimerIcon } from "lucide-react";
import Header from "./components/header/Header.tsx";

function App() {
	return (
		<>
			<Header>Hello world
				<button>
					<TimerIcon />
				</button>
			</Header>
		</>
	);
}

export default App;

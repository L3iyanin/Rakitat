import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Game from "../pages/Game";
import Chat from "../pages/Chat";
import Settings from "../pages/Settings";


const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/chat" element={<Chat />} />
					<Route path="/game" element={<Game />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/" element={<Landing />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
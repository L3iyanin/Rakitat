import PlayGround from "../components/Pages/Game/PlayGround/PlayGround";
import { fakeGameSettings } from "../utils/data/GamePage";
import TopSection from "../components/Pages/Game/TopSection";
import WatchersAndPlayers from "../components/Pages/Game/WatchersAndPlayers/WatchersAndPlayers";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Game: React.FC = () => {
	return (
		<div className="container">
			<NavBar />
			<div className="mt-10" />
			<TopSection
				name={fakeGameSettings.name}
				goalsToWin={fakeGameSettings.goalsToWin}
			/>
			<PlayGround settings={fakeGameSettings} />
			<WatchersAndPlayers
				player1={fakeGameSettings.player1}
				player2={fakeGameSettings.player2}
				watchers={fakeGameSettings.watchers}
			/>
			<Footer />
		</div>
	);
};

export default Game;

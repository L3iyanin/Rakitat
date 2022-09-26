import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PLAYER_ONE, PLAYGROUND_BORDERSIZE } from "../utils/constants/Game";

const usePlayerMove = (initialY: number, playerIndex: number) => {
	const [playerY, setPlayerY] = useState<number>(initialY);

	const LocalUserData = useSelector((state: any) => state.user.user);

	const clientSocket  = useSelector((state: any) => state.chat.clientSocket);

	const matchData: IMatchState = useSelector((state: any) => state.match);

	useEffect(() => {
		if (playerIndex === PLAYER_ONE) {
			window.player1Y = playerY;
		} else {
			window.player2Y = playerY;
		}
	}, [playerY])

	const movePlayerByMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const mouseY = (e.clientY - e.target.getBoundingClientRect().top);

		setPlayerY(mouseY);

		clientSocket.emit("updatePlayerY", {
			matchId: matchData.match?.matchId,
			userId: LocalUserData.id,
			newY: mouseY,
		})

	};

	const updatePlayerY = (newY: number) => {
		setPlayerY(newY);
	}

	// const updatePlayerPosition = (playerIndex: number) => {

	// 	if (playerIndex === PLAYER_ONE) {
	// 		setPlayerY(prevPlayerY => {
	// 			return window.playgroundHeight * window.player1YPositionRatio
	// 		})
	// 	}
	// 	else {
	// 		setPlayerY(prevPlayerY => {
	// 			return window.playgroundHeight * window.player2YPositionRatio
	// 		})
	// 	}
	// };

	

	return {
		playerY,
		movePlayerByMouse,
		updatePlayerY
		// updatePlayerPosition
	};
}

export default usePlayerMove
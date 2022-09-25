import { BALL_SIZE, INITIAL_VELOCITY, PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_X_MARGIN, PADDLE_Y_MARGIN, PLAYER_FIRST_POSITION, PLAYER_ONE, PLAYER_TWO, PLAYGROUND_BORDERSIZE, PLAY_GROUND_HEIGHT, PLAY_GROUND_WIDTH } from "../constants/game.constants";
import { Ball } from "../dto/game.dto";

class GameLogic {

	player1y: number;
	player2y: number;

	ball: Ball;

	player1Score: number;
	player2Score: number;

	constructor() {
		this.resetGame();
		this.player1Score = 0;
		this.player2Score = 0;
	}

	resetGame() {
		this.player1y = PLAYER_FIRST_POSITION;
		this.player2y = PLAYER_FIRST_POSITION;
		let direction = { x: 0, y: 0 };

		while (Math.abs(direction.x) <= 0.2 || Math.abs(direction.x) >= 0.9) {
			const heading = randomNumberBetween(0, 2 * Math.PI);
			direction = { x: Math.cos(heading), y: Math.sin(heading) };
		}

		this.ball.x = PLAY_GROUND_WIDTH / 2 - BALL_SIZE / 2 + PLAYGROUND_BORDERSIZE + PADDLE_X_MARGIN / 2 - 2;
		this.ball.y = PLAY_GROUND_WIDTH / 2 - BALL_SIZE / 2 + PLAYGROUND_BORDERSIZE + PADDLE_Y_MARGIN / 2 - 2;
		this.ball.velocity = INITIAL_VELOCITY;
		this.ball.directionX = direction.x;
		this.ball.directionY = direction.y;
	}

	isCollisionWithPlayer (ballXposition: number, ballYposition: number, playerYposition: number, playerNumber: number): boolean {

		const cornerX = playerNumber === PLAYER_ONE ? PADDLE_X_MARGIN + PADDLE_WIDTH - PLAYGROUND_BORDERSIZE / 2 : PLAY_GROUND_WIDTH - PADDLE_X_MARGIN - PADDLE_WIDTH  - PLAYGROUND_BORDERSIZE / 2;

		const radius = BALL_SIZE / 2;
		const distX = (cornerX - ballXposition) * (cornerX - ballXposition);
		const topCornerY = playerYposition - PADDLE_HEIGHT / 2;
		const bottomCornerY = playerYposition + PADDLE_HEIGHT / 2;

		if (distX + (topCornerY - ballYposition) * (topCornerY - ballYposition) <= radius * radius)
		{
			return true;
		}
		else if (distX + (bottomCornerY - ballYposition) * (bottomCornerY - ballYposition) <= radius * radius)
		{
			return true;
		}
		else
		{
			const isInPaddleRange = ballYposition >= topCornerY && ballYposition <= bottomCornerY;
			if (playerNumber === 1 && ballXposition - radius <= cornerX && isInPaddleRange)
				return true;
			else if (playerNumber === 2 && ballXposition + radius >= cornerX && isInPaddleRange)
				return true;
			else
				return false;
		}
	};

	updateBallPosition() {
		const distance = this.ball.velocity;

		let newDirectionX = this.ball.directionX;
		let newDirectionY = this.ball.directionY;

		let newX = this.ball.x + newDirectionX * distance;
		let newY = this.ball.y + newDirectionY * distance;

		// let newVelocity = prev.velocity + VELOCITY_INCREASE * delta;

		if (newY + BALL_SIZE / 2 >= PLAY_GROUND_HEIGHT - PLAYGROUND_BORDERSIZE) {
			console.log("collision with bottom");
			newDirectionY = newDirectionY * -1;
			newY = this.ball.y + newDirectionY * distance;
		}

		if (newY - BALL_SIZE / 2 <= 0) {
			newDirectionY = newDirectionY * -1;
			newY = this.ball.y + newDirectionY * distance;
		}

		if (this.isCollisionWithPlayer(newX, newY, this.player1y, PLAYER_ONE)) {
			// cancelAnimationFrame(requestRef.current!)
			newDirectionX = newDirectionX * -1;
			newX = this.ball.x + newDirectionX * distance;
		}

		if (this.isCollisionWithPlayer(newX, newY, this.player2y, PLAYER_TWO)) {
			// cancelAnimationFrame(requestRef.current!)
			newDirectionX = newDirectionX * -1;
			newX = this.ball.x + newDirectionX * distance;
		}

		if (newX - BALL_SIZE / 2 <= PADDLE_X_MARGIN + PLAYGROUND_BORDERSIZE - PLAYGROUND_BORDERSIZE) {
			this.resetGame();
			this.player1Score += 1;
		}

		if (newX + BALL_SIZE / 2 >= PLAY_GROUND_WIDTH - PADDLE_WIDTH) {
			this.resetGame();
			this.player2Score += 1;
		}

		this.ball.x = newX;
		this.ball.y = newY;

		this.ball.directionX = newDirectionX;
		this.ball.directionY = newDirectionY;

	}

	updatePlayerY(newYPosition, playerNumber) {
		let newPlayerY: number = newYPosition;
		if (newYPosition + (PADDLE_HEIGHT / 2) + PLAYGROUND_BORDERSIZE >= PLAY_GROUND_HEIGHT) {
			newPlayerY = this.player1y = (PLAY_GROUND_HEIGHT - PLAYGROUND_BORDERSIZE - PADDLE_HEIGHT / 2 - PADDLE_Y_MARGIN);
		}
		else if (newYPosition - PADDLE_HEIGHT / 2 <= 0) {
			newPlayerY = (PADDLE_HEIGHT / 2 + PADDLE_Y_MARGIN);
		}
		else {
			newPlayerY = newYPosition;
		}

		if (playerNumber === PLAYER_ONE) {
			this.player1y = newPlayerY;
		}
		else {
			this.player2y = newPlayerY;
		}
	}

	updatePlayer1YPosition(newYPosition: number) {
		this.updatePlayerY(newYPosition, PLAYER_ONE);
	}

	updatePlayer2YPosition(newYPosition: number) {
		this.updatePlayerY(newYPosition, PLAYER_TWO);
	}

	getGameStatus() {
		return {
			player1y: this.player1y,
			player2y: this.player2y,
			ball: this.ball,
			player1Score: this.player1Score,
			player2Score: this.player2Score,
		};
	}

}

export default GameLogic;

// * Helper Function: ************************************************************

function randomNumberBetween(min: number, max: number) {
	return Math.random() * (max - min) + min;
}
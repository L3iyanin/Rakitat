
const Score : React.FC <{score1 : number, score2 : number, isbg : boolean}> = ({ score1, score2, isbg}) => {
	return (
		<div className={`px-8 py-2 rounded-3xl bg-grey flex justify-center items-center gap-2 text-xl font-bold ${isbg && "bg-grey"}`}>
			<span>{score1}</span>
			<span>:</span>
			<span>{score2}</span>
		</div>
		
	);
};

export default Score;
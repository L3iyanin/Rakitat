import { useTranslation } from "react-i18next";
import { ChannleStatusEnum } from "../utils/constants/enum";

const useBotChannel = (): IChatChannel => {

	const { t } = useTranslation();

	const user: IUser =
		{
			id: 1,
			fullName: t("chatPage.bot.name"),
			username: t("chatPage.bot.name"),
			imgUrl: `https://myanimelist.tech/api/avatar?name=${t("chatPage.bot.name")}&animeName=Inazuma_Eleven`,
			wins: 15,
			loses: 4,
			achievements: [],
		};
	
	const members: IMember[] = [{
		id: 1,
		user,
	}];

	const messages: IMessage[] = [
		{
			id: 0,
			content:  t("chatPage.bot.botMessages.0"),
			sender: members[0],
			date: new Date(),
		},
		{
			id: 1,
			content: t("chatPage.bot.botMessages.1"),
			sender: members[0],
			date: new Date(),
		},
		{
			id: 2,
			content: t("chatPage.bot.botMessages.2"),
			sender: members[0],
			date: new Date(),
		}
	];

	

	return (
		{
			id: -1,
			name: t("chatPage.bot.name"),
			members: members,
			messages: messages,
			status: ChannleStatusEnum.BOTONDM,
			imgUrl: `https://myanimelist.tech/api/avatar?name=${t("chatPage.bot.name")}&animeName=Inazuma_Eleven`,
		}
	);
}

export default useBotChannel;

interface IAchievement {
    id: number,
    name: string,
    description: string,
    imgUrl: string,
    users: IUser[],
}

interface IUser {
    id: number,
    username: string,
    fullName: string,
    imgUrl: string,
	numberOfAchievements?: number,
    achievements?: IAchievement[]
    wins?: number,
    loses?: number,
    login?: string,
    twoFactorAuth?: boolean,
	numberOfFriends?: number,
    friends?: IUser[],
    friendsRelation?: IUser[],
	isFriend?: boolean,
    createdChannles?: IChatChannel[],
    members?: IMember[],
    messages?: Message[],
	userStatus?: UserStatusEnum,
}

interface IUserState {
	user: UserInterface | null;
	isLoggedIn: boolean;
	isLoading: boolean;
	isMatching: boolean;
	whenMatching?: string;
}

interface ISettingsState {
	lng: LanguagesEnum;
}

interface UserInterface {
	id: number;
	username: string,
	fullName: string,
	expiresIn?: string,
}

interface IOnlineUser {
	user: {
		username: string;
		fullName: string;
		id: number;
	}
}
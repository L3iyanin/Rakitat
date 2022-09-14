import { useTranslation } from "react-i18next";

const Footer = () => {

	const { t, i18n } = useTranslation();

	const changeLanguageToEnglish = () => {
		i18n.changeLanguage("en");
	};

	const changeLanguageToArabic = () => {
		i18n.changeLanguage("ar");
	};

	const changeLanguageToTifinagh = () => {
		i18n.changeLanguage("ti");
	};

	return (
		<div className="bg-dark-60 mt-20 text-white">
			<div className="container flex justify-between">
				<p className=" mx-auto px-6  text-sm font-medium p-4">
					{t("footer.textOne")}
				</p>
				<div className="flex items-center gap-4 text-sm text-yellow">
					<span onClick={changeLanguageToEnglish} className="underline cursor-pointer">English</span>
					<span onClick={changeLanguageToArabic} className="underline cursor-pointer">عربية</span>
					<span onClick={changeLanguageToTifinagh} className="underline cursor-pointer">ⵜⵉⴼⵉⵏⴰⴳⵀ</span>
					<a href="https://i.redd.it/by5yr54ga1b81.jpg" className="underline">Français</a>
				</div>
				<p className=" mx-auto px-6 text-sm font-medium p-4">
				{t("footer.textTwo")}
				</p>

			</div>
		</div>
	);
};

export default Footer;

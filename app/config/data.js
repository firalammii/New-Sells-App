import colors from "./colors";

export const items = [
	{ id: 1, title: "Red Jacket for sale", img: require("../assets/jacket.jpg"), subTitle: "$ 100" },
	{ id: 2, title: "Couch in great condition", img: require("../assets/couch.jpg"), subTitle: "$ 500" }
];

export const initMsgs = [
	{ id: 1, title: "Mosh Hamedani 1", img: require("../assets/mosh.jpg"), subTitle: "2 listings" },
	{ id: 2, title: "Mosh Hamedani 2", img: require("../assets/mosh.jpg"), subTitle: "5 listings" },
	{ id: 3, title: "Firosh Bekelani 2", img: require("../assets/FIRA_2024.jpg"), subTitle: "3 listings" },
];

export const menuItems = [
	{
		title: "My Listings",
		subTitle: "",
		icon: {
			icon_name: "format-list-bulleted",
			icon_color: colors.white,
			bg_color: colors.primary,
		},
	},
	{
		title: "My Account",
		subTitle: "",
		icon: {
			icon_name: "email",
			icon_color: colors.white,
			bg_color: colors.secondary,
		},
	},
];
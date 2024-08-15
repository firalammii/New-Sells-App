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
		id: 1,
		title: "My Listings",
		subTitle: "",
		icon: {
			icon_name: "format-list-bulleted",
			icon_color: colors.white,
			bg_color: colors.primary,
		},
	},
	{
		id: 2,
		title: "My Account",
		subTitle: "",
		icon: {
			icon_name: "email",
			icon_color: colors.white,
			bg_color: colors.secondary,
		},
	},
	// {
	// 	id: 3,
	// 	title: "Log out",
	// 	subTitle: "",
	// 	icon: {
	// 		icon_name: "logout",
	// 		icon_color: colors.white,
	// 		bg_color: colors.gold,
	// 	},
	// },
];

export const appPickerOptions = [
	{ id: 1, value: "Tea", selected: true, },
	{ id: 2, value: "Ice Cream", selected: false, },
	{ id: 3, value: "Coffee", selected: false, }
];

export const goods = [
	{ id: 1, name: "Tea", category: 'hot drinks', },
	{ id: 2, name: "Coffee", category: 'hot drinks', },
	{ id: 3, name: "Chat", category: 'drugs', },
	{ id: 4, name: "Besso", category: 'food', },
	{ id: 5, name: "Tea", category: 'hot drinks', },
	{ id: 6, name: "Coffee", category: 'hot drinks', },
	{ id: 7, name: "Chat", category: 'drugs', },
	{ id: 8, name: "Besso", category: 'food', },
	{ id: 9, name: "Tea", category: 'hot drinks', },
	{ id: 10, name: "Coffee", category: 'hot drinks', },
	{ id: 11, name: "Chat", category: 'drugs', },
	{ id: 12, name: "Besso", category: 'food', },
	{ id: 13, name: "Coffee", category: 'hot drinks', },
	{ id: 14, name: "Chat", category: 'drugs', },
	{ id: 15, name: "Difo", category: 'food', },

];
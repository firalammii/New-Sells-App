import { SafeAreaView, Text, View, StyleSheet, Platform, StatusBar, } from "react-native";

export default function FlexBox () {
	return (
		<SafeAreaView
			style={styles.container}
		>
			<View style={{ ...styles.box, ...styles.green }}></View>
			<View style={{ ...styles.box, ...styles.yellow }}></View>
			<View style={{ ...styles.box, ...styles.red }}></View>
			<View style={{ ...styles.box, ...styles.green }}></View>
			{/* <View style={{ ...styles.box, ...styles.yellow }}></View> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		flex: 1,
		// flexDirection: "row",
		// justifyContent: "flex-end",
		// justifyContent: "center",
		alignItems: "center",
		// alignItems: "flex-end",

		// justifyItems: "center",
		// alignContent: "center",

		flexWrap: "wrap",

		// overflow: "auto",

	},
	box: {
		// flex: 1,
		width: 100,
		height: 100,
	},
	green: {
		backgroundColor: '#0f0',
		// flex: 1,
	},
	yellow: {
		backgroundColor: '#ff0'
	},
	red: {
		backgroundColor: '#f00',
		height: 100,
		// height: 200,
		width: 200,
	}
});
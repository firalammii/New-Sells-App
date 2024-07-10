import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import constant from "expo-constants";
import colors from '../config/colors';

const MySafeScreen = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.safe_view, style]}>
			{
				children
			}
		</SafeAreaView>
	);
};

export default MySafeScreen;
const styles = StyleSheet.create({
	safe_view: {
		flex: 1,
		paddingTop: constant.statusBarHeight,
		// backgroundColor: colors.light,
	}
});
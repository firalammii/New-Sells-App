import { Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableDemo = ({ children, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			{children}
		</Pressable>
	);
};

export default PressableDemo;

const styles = StyleSheet.create({});
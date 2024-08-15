import { StyleSheet, View } from 'react-native';
// import { Formik } from 'formik';
import React, { useState } from 'react';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import MyButton from '../components/MyButton';

const FormScreen = () => {
	const [formData, setFormData] = useState({
		email: "",
		pwd: "",
	});
	const handleInput = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};
	const handleLogin = () => {
		console.log(formData.email, formData.pwd);
	};
	return (
		<View style={styles.form_con}>
			<Formik
				initialValues={{ email: "", pwd: "" }}
				onSubmit={values => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							name="email"
							placeholder="Email"
							changeHandler={handleChange("email")}
							icon={{ icon_name: "email", size: 25, icon_color: colors.primary }} autoCapitalize="none"
							autoCorrect={false}
							autoFocus
							keyboardType="email-address"
							textContentType="emailAddress"
						/>
						<AppTextInput
							name="pwd"
							placeholder="Password"
							changeHandler={handleChange("pwd")}
							icon={{ icon_name: "lock", size: 25, icon_color: colors.primary }} autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry
							textContentType="password"
						/>

						<MyButton title={"Log in"} onPress={handleSubmit} />

					</>
				)}
			</Formik>
			<AppTextInput
				name="email"
				placeholder="Email"
				changeHandler={handleInput}
				icon={{ icon_name: "email", size: 25, icon_color: colors.primary }} autoCapitalize="none"
				autoCorrect={false}
				autoFocus
				keyboardType="email-address"
				textContentType="emailAddress"
			/>
			<AppTextInput
				name="pwd"
				placeholder="Password"
				changeHandler={handleInput}
				icon={{ icon_name: "lock", size: 25, icon_color: colors.primary }} autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry
				textContentType="password"
			/>

			<MyButton title={"Log in"} onPress={handleLogin} />
		</View>
	);
};

export default FormScreen;

const styles = StyleSheet.create({
	form_con: {
		paddingVertical: 200,
		display: "flex",
		gap: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	login_btn: {
		marginTop: 40,
	}
});
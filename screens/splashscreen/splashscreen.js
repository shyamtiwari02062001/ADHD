import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import PropTypes from "prop-types";
const SplashScreen = (props) => {
	setTimeout(() => {
		props.navigation.navigate("Dashboard");
	}, 2000);
	return (
		<View style={styles.container} data-test="container">
			<ImageBackground
				source={require("../../assets/conc.png")}
				style={styles.image}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	image:{
		flex: 1,
		justifyContent: "center",
	}
});
export default SplashScreen;
SplashScreen.propTypes={
	navigation:PropTypes.any,
};
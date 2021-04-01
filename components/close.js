import React from "react";
import {View,Image,TouchableOpacity,StyleSheet} from "react-native";
import PropTypes from "prop-types";
const Close =(props) =>{
	return(
		<View style={styles.close}>
			<TouchableOpacity
				onPress={props.fun}
			>
				<Image
					source={require("../assets/cancel.png")}
					style={styles.img}/>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	close:{
		position:"absolute",
		top:30,
		left:10
	},
	img:{
		height:30,
		width:30
	}
});
Close.propTypes={
	fun:PropTypes.any,
};
export default Close;
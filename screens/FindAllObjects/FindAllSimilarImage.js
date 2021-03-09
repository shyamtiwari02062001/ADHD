import React from "react";
import { StyleSheet, View,Text } from "react-native";
import Buttons from "./Buttons";
const  FindAllObjects=()=>{
	return (
		<View style={styles.container}>
			<View style={{flexDirection:"row"}}>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/dog.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/dog.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
			</View>
			<View style={{flexDirection:"row"}}>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/dog.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/dog.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
			</View>
			<View style={{flexDirection:"row"}}>
				<Buttons
					source={require("../../assets/dog.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/deer.png")}
					required={require("../../assets/dog.png")}
				/>
				<Buttons
					source={require("../../assets/dog.png")}
					required={require("../../assets/dog.png")}
				/>
			</View>
			<View>
				<Text
					style={{textAlign:"center",fontSize:30}}
				>
					Find all the images of dog
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
export default FindAllObjects;
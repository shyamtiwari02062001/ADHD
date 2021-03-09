import React from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
	Text
} from "react-native";
import PropTypes from "prop-types";
import { ScrollView } from "react-native-gesture-handler";
import Dashboard from "../../constants/Dashboard";
import DashboardGameName from "../../constants/DashboardGameName";
const DashboardScreen = (props) => {
	const call=(index)=>{
		if(index==0){
			props.navigation.navigate("TurnAround");
		}
		if(index==1){
			props.navigation.navigate("FindAllObjects");
		}
	};
	return(
		<View style={styles.container}>
			<ImageBackground source={require("../../assets/DashBack.png")}
				style={styles.image}
			>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{Dashboard.map((data,index)=>
						<View style={styles.view} key={index}>
							<TouchableOpacity
								style={{alignItems:"center"}}
								activeOpacity={0.5}
								onPress={()=>{call(index);}}
							>
								<Image source={data} style={styles.img}/>
								<Text style={styles.text}>
									{DashboardGameName[index]}
								</Text>
							</TouchableOpacity>
						</View>
					)}
				</ScrollView>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection:"row"
	},
	image:{
		flex:1,
		justifyContent:"center",
	},
	img:{
		height:200,
		width:200,
		borderRadius:500
	},
	text:{
		fontSize:25,
		color:"#ffffff",
		fontWeight:"bold"
	},
	view:{
		justifyContent:"center",
		marginLeft:20
	}
});
DashboardScreen.propTypes={
	navigation:PropTypes.any,
};
export default DashboardScreen;
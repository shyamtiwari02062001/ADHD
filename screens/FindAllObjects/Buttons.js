import React,{useState} from "react";
import {View,ImageBackground,Image,Pressable,StyleSheet} from "react-native";
import PropTypes from "prop-types";
const Button = (props) =>{
	const [sourceImage,setSouceImage]=useState(null);
	const [imageid,setImageID]=useState(0);
	return(
		<View style={styles.view}>
			{
				(sourceImage!=imageid)
			&&
			<Pressable onPress={()=>{
				props.fun((props.source===props.required)?1:0);
				setSouceImage(props.source);
				setImageID(props.required);
			}}>
				<Image source={props.source} style={styles.image}/>
			</Pressable>
			}
			{(sourceImage==imageid)
			&&<ImageBackground
				source={props.source}
				style={styles.image}
			>

				<View style={{
					alignItems:"center",
					justifyContent:"center",
					flex:1
				}}>
					<Image
						source={require("../../assets/tick.png")}
						style={styles.img}
					/>
				</View>
			</ImageBackground>
			}
		</View>
	);
};
const styles=StyleSheet.create({
	view:{
		borderWidth:1,
		margin:5,
		borderRadius:20,
		backgroundColor:"lightblue",
		padding:2
	},
	image:{
		height:60,
		width:60
	},
	img:{
		height:60,
		width:60,
		tintColor:"green"
	}
});
Button.propTypes={
	source:PropTypes.any,
	required:PropTypes.any,
	fun:PropTypes.any,
};
export default Button;
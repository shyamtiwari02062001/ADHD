import React,{useState} from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
} from "react-native";
import Buttons from "./Buttons";
import FindAllSimilar from "../../constants/FindAllSimilarImages";
import FindAllImagesData from "../../constants/FindAllImagesData";
import Close from "../../components/close";
import PropTypes from "prop-types";
const  FindAllObjects=(props)=>{
	// eslint-disable-next-line prefer-const
	let [gameid,setGameid]=useState(0);
	const arraySize=FindAllSimilar[gameid].length-1;
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const [success,setSuccess]=useState(false);
	const check=(val)=>{
		setCount(count+val);
		console.log(count);
		if(FindAllImagesData[gameid]==count+1){
			setTimeout(()=>{
				setSuccess(true);
			},500);
			setTimeout(()=>{
				setCount(0);
				setGameid(++gameid);
				setSuccess(false);
			},4000);
		}
	};
	return (
		<View style={styles.container}>
			{(success===false)&&<ImageBackground style={styles.container}
				source={require("../../assets/findAllObjectBack.png")}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<View style={styles.extraImage}>
					<Image
						source={FindAllSimilar[gameid][arraySize]}
						style={{height:60,width:60}}
					/>
				</View>
				<View style={{alignItems:"center"}}>
					<View style={{flexDirection:"row"}}>
						{FindAllSimilar[gameid].map((data,index)=>
							(index<=6)&&
					<Buttons key={index}
						fun={(val)=>{check(val);}}
						source={data}
						required={FindAllSimilar[gameid][arraySize]}
					/>
						)}
					</View>
					<View style={{flexDirection:"row"}}>
						{FindAllSimilar[gameid].map((data,index)=>
							(index>=7&&index<=13)&&
					<Buttons key={index}
						fun={(val)=>{check(val);}}
						source={data}
						required={FindAllSimilar[gameid][arraySize]}
					/>
						)}
					</View>
					<View style={{flexDirection:"row"}}>
						{FindAllSimilar[gameid].map((data,index)=>
							(index>=14&&index<=20)&&
					<Buttons key={index}
						fun={(val)=>{check(val);}}
						source={data}
						required={FindAllSimilar[gameid][arraySize]}
					/>
						)}
					</View>
				</View>
				<View style={styles.text}>
					<Text style={styles.bottomText}>
					Mark all the objects in the table which
					are similar to the object on the left.
					</Text>
				</View>
			</ImageBackground>}
			{(success===true)&&<View style={{flex:1}}>
				<ImageBackground style={styles.gif} source={
					require("../../assets/celebration.gif")
				}>
					<Image
						source={
							require("../../assets/success.gif")
						}
						style={styles.gif}/>
				</ImageBackground>
			</View>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:"row",
		justifyContent:"center",
		backgroundColor: "#fff",
		alignItems:"center",
		width:"100%",
		height:"100%"
	},
	extraImage:{
		flexDirection:"row",
		marginRight:20,
		borderRadius:50,
		borderWidth:2,
		padding:10,
		backgroundColor:"lightblue"
	},
	text:{
		borderRadius:50,
		borderWidth:3,
		position:"absolute",
		bottom:10,
		padding:10,
		width:"90%",
		backgroundColor:"white"
	},
	bottomText:{
		textShadowColor: "purple",
		textShadowOffset: {width: -1, height: 1},
		textShadowRadius: 1,
		textAlign:"center",
		fontSize:20,
	},
	gif:{
		height:"100%",
		width:"100%"
	}
});
FindAllObjects.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default FindAllObjects;
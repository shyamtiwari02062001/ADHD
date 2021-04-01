import React,{useState,useEffect} from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	ImageBackground,
} from "react-native";
import Reaction from "../../constants/Reaction";
import Close from "../../components/close";
import PropTypes from "prop-types";
const ReactionPage = (props) => {
	// eslint-disable-next-line prefer-const
	let [gameid,setGameid]=useState(0);
	const [sideImage,setSideImage]=useState(Reaction[gameid][10]);
	const [success,setSuccess]=useState(false);
	// eslint-disable-next-line prefer-const
	let [times,setTimes]=useState(0);
	// eslint-disable-next-line prefer-const
	let [value,setValue]=useState(0);
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const lastValue=Reaction[gameid][11];
	const [random,setRandom]=useState(2);
	// eslint-disable-next-line prefer-const
	useEffect(()=>{
		changeImage();
	});
	const changeImage=()=>{
		if(count!=lastValue){
			for(let i=0;i<Reaction[gameid].length-2;i++){
				if(i==value){
					setTimeout(()=>{
						setValue(++value);
					},1000);
				}
			}
		}
	};
	if(value==10&&count!=lastValue){
		setTimeout(()=>{
			setValue(0);
			changeImage();
		},1000);
	}
	const check=()=>{
		setTimes(++times);
		if(times==random){
			setSideImage(Reaction[gameid][random]);
			const rand=Math.floor(Math.random() * 10)+1;
			setRandom(rand);
			setTimes(0);
		}
		if(sideImage===Reaction[gameid][value]&&count!=lastValue){
			setCount(++count);
		}
		if(sideImage!==Reaction[gameid][value]&&count!=0){
			setCount(--count);
		}
		if(count==lastValue){
			setSuccess(true);
			setGameid(++gameid);
			setValue(0);
			setCount(0);
			setTimes(0);
			setTimeout(()=>{
				setSuccess(false);
			},5750);
		}
	};
	return(
		<View style={{flex:1}}>
			{(success==false)&&	<ImageBackground
				source={require("../../assets/memorizebg.png")}
				style={styles.container}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<View>
					<Text style={{fontSize:20}}>{count}/{lastValue}</Text>
				</View>
				<View style={styles.sideImage}>
					<Image
						source={sideImage}
						style={{height:80,width:80}}
					/>
				</View>
				<View style={{marginTop:40,marginRight:25}}>
					<Image
						source={Reaction[gameid][value]}
						style={{height:150,width:150}}
					/>
				</View>
				<View style={{position:"absolute",right:"15%",top:"40%"}}>
					<TouchableOpacity onPress={()=>{check();}}>
						<Image
							source={require("../../assets/button.png")}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.textView}>
					<Text style={styles.text}>
					Press the button when the picture in the
					center of the screen is the same as the one in the left.
					</Text>
				</View>
			</ImageBackground>}
			{(success==true)&&
			<View style={
				{flex:1,width:"100%",height:"100%"}}
			>
				<Image
					source={require("../../assets/winner.gif")}
					style={{height:"100%",width:"100%"}}
				/>
			</View>
			}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:"center",
		justifyContent:"space-evenly",
		flexDirection:"column",
		width:"100%"
	},
	img:{
		height:60,
		width:60
	},
	textView:{
		borderWidth:3,
		borderRadius:50,
		width:"75%",
		padding:5,
		backgroundColor:"white"
	},
	text:{
		textAlign:"center",
		fontSize:16,
		fontStyle:"italic",
		fontWeight:"bold"
	},
	sideImage:{
		position:"absolute",
		left:"12%",
		top:"33%",
		borderWidth:2,
		borderRadius:80,
		padding:10,
	}
});
ReactionPage.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default ReactionPage;
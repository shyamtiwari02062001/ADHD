import React,{useState} from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	ImageBackground
} from "react-native";
import Close from "../../components/close";
import PropTypes from "prop-types";
import CountData from "../../constants/CountData";
const CountPage=(props)=>{
	const [playing,setPlaying]=useState(false);
	// eslint-disable-next-line prefer-const
	let [value,setValue]=useState(0);
	// eslint-disable-next-line prefer-const
	let [gameLevel,setGameLevel]=useState(0);
	const [Success,setSuccess]=useState(false);
	let i=0;
	if(playing===true){
		for(i=0;i<CountData[gameLevel].length;i++){
			if(value===14){
				setPlaying("wrong");
			}
			if(i==value){
				setTimeout(()=>{
					setValue(++value);
				},1000);
			}
		}
	}
	const match=()=>{
		setPlaying(true);
	};
	const checkInput=(val)=>{
		const lastValue=CountData[gameLevel].length;
		if(val===CountData[gameLevel][lastValue-1]){
			setSuccess(true);
			setTimeout(()=>{
				setSuccess(false);
				setPlaying(false);
				setValue(0);
				setGameLevel(++gameLevel);
			},5750);
		}
		else{
			setSuccess("wrong");
			setTimeout(()=>{
				setSuccess(false);
				setPlaying(false);
				setValue(0);
			},5750);
		}
	};
	return(
		<View style={styles.container}>
			{(Success===false)&&
			<ImageBackground source={require("../../assets/CountBG.png")}
				style={styles.image}
			>
				{(playing==false)&&<View style={{flexDirection:"row"}}>
					<Image
						source={CountData[gameLevel][0]}
						style={{height:100,width:100}}
					/>
				</View>
				}
				{(playing==true)&&<View style={{marginBottom:40}}>
					<Image
						source={CountData[gameLevel][value]}
						style={{height:200,width:200}}
					/>
				</View>
				}
				{(playing=="wrong")&&<View style={styles.view}>
					<View style={{flexDirection:"row"}}>
						<TouchableOpacity
							onPress={()=>{
								checkInput(1);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>1</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>{
								checkInput(2);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>2</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>{
								checkInput(3);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>3</Text>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection:"row"}}>
						<TouchableOpacity
							onPress={()=>{
								checkInput(4);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>4</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>{
								checkInput(5);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>5</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>{
								checkInput(6);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>6</Text>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection:"row"}}>
						<TouchableOpacity
							onPress={()=>{
								checkInput(7);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>7</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>{
								checkInput(8);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>8</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={()=>{
								checkInput(9);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>9</Text>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection:"row"}}>
						<TouchableOpacity
							onPress={()=>{
								checkInput(0);
							}}
							style={styles.button}>
							<Text style={{fontSize:30}}>0</Text>
						</TouchableOpacity>
					</View>
				</View>
				}
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				{(playing===false)&&
			<View style={styles.bottomTextView}>
				<Text style={styles.text}>
                    Count the number of times above image is displayed
				</Text>
			</View>
				}
				{(playing==="wrong")&&
			<View style={styles.bottomTextView}>
				<Text style={styles.text}>
                    Enter the number of times the image was displayed
				</Text>
			</View>
				}
				{(playing===false)&&<View style={styles.ok}>
					<TouchableOpacity onPress={()=>{match();}}>
						<Image
							source={require("../../assets/ok.png")}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				}
				{(playing==="wrong")&&<View style={styles.prev}>
					<TouchableOpacity
						onPress={()=>{
							setPlaying(false);
							setValue(0);
						}}>
						<Image
							source={require("../../assets/prev.png")}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				}
			</ImageBackground>
			}
			{(Success===true)&&
			<View style={
				{zIndex:3,elevation:3,flex:1,width:"100%",height:"100%"}}
			>
				<Image
					source={require("../../assets/winner.gif")}
					style={{height:"100%",width:"100%"}}
				/>
			</View>
			}
			{(Success==="wrong")&&
			<View style={{
				zIndex:3,
				elevation:3,
				flex:1,
				width:"100%",
				height:"100%",
				justifyContent:"center",
				alignItems:"center"
			}}>
				<Image
					source={require("../../assets/failure.gif")}
					style={{height:"100%",width:"100%"}}
				/>
			</View>
			}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:"row"
	},
	image:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		zIndex:1
	},
	bottomTextView:{
		position:"absolute",
		bottom:10,
		borderWidth:2,
		borderRadius:50,
		padding:5,
		width:"80%",
		backgroundColor:"white"
	},
	text:{
		textAlign:"center",
		fontSize:18
	},
	ok:{
		position:"absolute",
		bottom:10,
		right:20
	},
	img:{
		height:50,
		width:50
	},
	prev:{
		position:"absolute",
		bottom:10,
		left:10
	},
	view:{
		marginBottom:40,
		alignItems:"center",
		justifyContent:"space-around"
	},
	button:{
		padding:10,
		borderWidth:2,
		borderRadius:20,
		marginLeft:10,
		marginBottom:10,
		backgroundColor:"white"
	}
});
CountPage.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default CountPage;
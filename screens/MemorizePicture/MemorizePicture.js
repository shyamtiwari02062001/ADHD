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
import MemorizePic from "../../constants/MemorizePic";
import Buttons from "./Buttons";
const MemorizePicturePage=(props)=>{
	const [playing,setPlaying]=useState(false);
	const [count,setCount]=useState(0);
	const [countall,setCountall]=useState(0);
	// eslint-disable-next-line prefer-const
	let [gameId,setGameId]=useState(0);
	const [success,setSuccess]=useState(false);
	const check=(val,countAll)=>{
		console.log(val," input ",countAll);
		setCountall(countAll+countall);
		setCount(val+count);
		console.log(count," ",countall);
	};
	const match=()=>{
		setPlaying(true);
		if(count||countall!=0){
			if(count===countall&&count===MemorizePic[gameId][0]){
				setSuccess(true);
				setTimeout(()=>{
					setGameId(++gameId);
					setPlaying(false);
					setCount(0);
					setCountall(0);
					setSuccess(false);
				},5750);
			}
			else{
				setSuccess("wrong");
				setTimeout(()=>{
					setPlaying(false);
					setCount(0);
					setCountall(0);
					setSuccess(false);
				},5750);
			}
		}
	};
	return(
		<View style={styles.container}>
			{(success===false)&&
			<ImageBackground source={require("../../assets/Memorize.png")}
				style={styles.image}
			>
				{(playing==false)&&<View style={{flexDirection:"row"}}>
					{MemorizePic[gameId].map((data,index)=>
						(index>=1   && index<=MemorizePic[gameId][0]
						)&&<View key={index} style={{padding:10}}>
							<Image
								source={data}
								style={{height:100,width:100}}
							/>
						</View>
					)}
				</View>
				}
				<View style={{marginBottom:40}}>
					{(playing==true)&&<View style={{flexDirection:"row"}}>
						{MemorizePic[gameId].map((data,index)=>
							(index>MemorizePic[gameId][0]&&
								index<=4+MemorizePic[gameId][0]
							)&&<View key={index} style={{paddingBottom:10}}>
								<Buttons id={gameId}
									source={data}
									fun={(val,countAll)=>{check(val,countAll);}}
								/>
							</View>
						)}
					</View>}
					{(playing==true)&&<View style={{flexDirection:"row"}}>
						{MemorizePic[gameId].map((data,index)=>
							(index>4+MemorizePic[gameId][0]&&
								index<=8+MemorizePic[gameId][0]
							)&&<View key={index} style={{paddingBottom:10}}>
								<Buttons id={gameId}
									source={data}
									fun={(val,countAll)=>{check(val,countAll);}}
								/>
							</View>
						)}
					</View>}
					{(playing==true)&&<View style={{flexDirection:"row"}}>
						{MemorizePic[gameId].map((data,index)=>
							(index>8+MemorizePic[gameId][0]&&
								index<=12+MemorizePic[gameId][0]
							)&&<View key={index} style={{paddingtop:10}}>
								<Buttons id={gameId}
									source={data}
									fun={(val,countAll)=>{check(val,countAll);}}
								/>
							</View>
						)}
					</View>}
				</View>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<View style={styles.bottomTextView}>
					{(playing!==true)?
						<Text style={styles.text}>
                    Look at the pictures and memorize them
						</Text>
						:
						<Text style={styles.text}>
                        Now pick only the pictures
                        you have just seen on the screen
						</Text>}
				</View>
				<View style={styles.ok}>
					<TouchableOpacity onPress={()=>{match();}}>
						<Image
							source={require("../../assets/ok.png")}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				{(playing===true)&&<View style={styles.prev}>
					<TouchableOpacity onPress={()=>{setPlaying(false);}}>
						<Image
							source={require("../../assets/prev.png")}
							style={styles.img}
						/>
					</TouchableOpacity>
				</View>
				}
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
			{(success==="wrong")&&
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
		width: "100%",
		flexDirection:"row"
	},
	image:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	bottomTextView:{
		position:"absolute",
		bottom:10,
		borderWidth:2,
		borderRadius:50,
		padding:10,
		width:"80%"
	},
	text:{
		textAlign:"center",
		fontSize:18
	},
	ok:{
		position:"absolute",
		bottom:10,
		right:10
	},
	img:{
		height:50,
		width:50
	},
	prev:{
		position:"absolute",
		bottom:10,
		left:10
	}
});
MemorizePicturePage.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any,
};
export default MemorizePicturePage;
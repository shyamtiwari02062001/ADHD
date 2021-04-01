import React,{useState} from "react";
import {View,Text,StyleSheet,Image,ImageBackground} from "react-native";
import Close from "../../components/close";
import PropTypes from "prop-types";
import FindNumberOrdered from "../../constants/FindNumbersOrdered";
import FindNumberUnordered from "../../constants/FindNumbersUnordered";
import Buttons from "./Buttons";
const FindNumbersPage = (props) => {
	const [success,setSuccess]=useState(false);
	// eslint-disable-next-line prefer-const
	let [gameId,setGameId]=useState(0);
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const [image,setImage]=useState(FindNumberOrdered[gameId][0]);
	const check=(id)=>{
		const last=FindNumberOrdered[gameId].length -1;
		if(id===image&&id!=FindNumberOrdered[gameId][last]){
			setCount(++count);
			setImage(FindNumberOrdered[gameId][count]);
		}
		if(id===image&&id===FindNumberOrdered[gameId][last]){
			setSuccess(true);
			setTimeout(()=>{
				setGameId(++gameId);
				setCount(0);
				setImage(FindNumberOrdered[gameId][0]);
				setSuccess(false);
			},3000);
		}
	};
	return (
		<View style={styles.container}>
			{(success==false)&&
			<ImageBackground source={require("../../assets/findNumbersbg.png")}
				style={styles.image}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<View style={styles.outterView}>
					<View style={styles.innerView}>
						<Image
							source={image}
							style={styles.img} />
					</View>
					<View >
						<View style={{flexDirection:"row"}}>
							{FindNumberUnordered[gameId].map((data,index)=>
								(index<=4)&&<Buttons source={data}
									key={index}
									fun={(val)=>{check(val);}}/>
							)}
						</View>
						<View style={{flexDirection:"row"}}>
							{FindNumberUnordered[gameId].map((data,index)=>
								(index>=5&&index<=9)&&<Buttons source={data}
									key={index}
									fun={(val)=>{check(val);}}/>
							)}
						</View>
						<View style={{flexDirection:"row"}}>
							{FindNumberUnordered[gameId].map((data,index)=>
								(index>=10&&index<=14)&&<Buttons source={data}
									key={index}
									fun={(val)=>{check(val);}}/>
							)}
						</View>
						<View style={{flexDirection:"row"}}>
							{FindNumberUnordered[gameId].map((data,index)=>
								(index>=15&&index<=19)&&<Buttons source={data}
									key={index}
									fun={(val)=>{check(val);}}/>
							)}
						</View>
						<View style={{flexDirection:"row"}}>
							{FindNumberUnordered[gameId].map((data,index)=>
								(index>=20&&index<=24)&&<Buttons source={data}
									key={index}
									fun={(val)=>{check(val);}}/>
							)}
						</View>
					</View>
				</View>
				<View style={styles.textView}>
					<Text style={styles.text}>
					Press the numbers starting in the
                    table starting with 1 in ascending order
					</Text>
				</View>
			</ImageBackground>}
			{(success===true)&&<View style={{flex:1}}>
				<Image
					source={
						require("../../assets/turnAroundImages/success.gif")
					}
					style={styles.gif}/>
			</View>}
		</View>
	);
};
FindNumbersPage.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection:"row",
	},
	image:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	},
	textView:{
		position:"absolute",
		bottom:10,
		borderWidth:2,
		borderRadius:50,
		width:"75%",
		padding:5,
		backgroundColor:"white"
	},
	text:{
		textAlign:"center",
		fontSize:16
	},
	outterView:{
		flexDirection:"row",
		alignItems:"center",
		marginBottom:45
	},
	innerView:{
		borderWidth:2,
		borderRadius:20
	},
	img:{
		height:75,
		width:75,
		borderRadius:20
	},
	gif:{
		height:"100%",
		width:"100%"
	}
});
export default FindNumbersPage;
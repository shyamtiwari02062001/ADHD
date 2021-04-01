import React,{useState} from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	ImageBackground
} from "react-native";
import Tiles from "../../constants/tiles";
import Close from "../../components/close";
import PropTypes from "prop-types";
const  TurnAround=(props)=>{
	// eslint-disable-next-line prefer-const
	let [count,setCount]=useState(0);
	const [id1,setId1]=useState(null);
	const [id2,setId2]=useState(null);
	const [id3,setId3]=useState(null);
	const [id4,setId4]=useState(null);
	const [id5,setId5]=useState(null);
	const [id6,setId6]=useState(null);
	const [id7,setId7]=useState(null);
	const [id8,setId8]=useState(null);
	const [imageId1,setImageId1]=useState(null);
	const [imageId2,setImageId2]=useState(0);
	const [imageId3,setImageId3]=useState(null);
	const [imageId4,setImageId4]=useState(0);
	const [imageId5,setImageId5]=useState(null);
	const [imageId6,setImageId6]=useState(0);
	const [imageId7,setImageId7]=useState(null);
	const [imageId8,setImageId8]=useState(0);
	const [success,setSuccess]=useState(false);
	// eslint-disable-next-line prefer-const
	let [gameId,setGameId]=useState(0);
	const arrayLength=Tiles[gameId].length;
	const check=(tile,index)=>{
		setCount(++count);
		if(imageId1!=imageId2){
			if(count==1){
				setId1(index);
				setImageId1(tile);
			}
			else{
				setId2(index);
				setImageId2(tile);
				if(tile==imageId1){
					console.log("matched");
					setCount(0);
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId1(null);
						setImageId2(0);
						setId1(null);
						setId2(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&imageId3!=imageId4){
			if(count==1){
				setId3(index);
				setImageId3(tile);
			}
			else{
				setId4(index);
				setImageId4(tile);
				if(tile==imageId3){
					console.log("matched");
					setCount(0);
					if(arrayLength===4){
						setTimeout(()=>{
							setSuccess(true);
						},500);
						setTimeout(()=>{
							setImageId1(null);
							setImageId2(0);
							setId1(null);
							setId2(null);
							setImageId3(null);
							setImageId4(0);
							setId3(null);
							setId4(null);
							setGameId(++gameId);
						},2000);
						setTimeout(()=>{
							setSuccess(false);
						},3000);
					}
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId3(null);
						setImageId4(0);
						setId3(null);
						setId4(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&imageId3==imageId4&&imageId5!=imageId6){
			if(count==1){
				setId5(index);
				setImageId5(tile);
			}
			else{
				setId6(index);
				setImageId6(tile);
				if(tile==imageId5){
					console.log("matched");
					setCount(0);
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId5(null);
						setImageId6(0);
						setId5(null);
						setId6(null);
					},500);
				}
			}
		}
		else if(imageId1==imageId2&&
            imageId3==imageId4&&
            imageId5==imageId6&&
            imageId7!=imageId8){
			if(count==1){
				setId7(index);
				setImageId7(tile);
			}
			else{
				setId8(index);
				setImageId8(tile);
				if(tile==imageId7){
					console.log("matched");
					setCount(0);
					if(arrayLength===8){
						setTimeout(()=>{
							setSuccess(true);
						},500);
						setTimeout(()=>{
							setImageId1(null);
							setImageId2(0);
							setId1(null);
							setId2(null);
							setImageId3(null);
							setImageId4(0);
							setId3(null);
							setId4(null);
							setImageId5(null);
							setImageId6(0);
							setId5(null);
							setId6(null);
							setImageId7(null);
							setImageId8(0);
							setId7(null);
							setId8(null);
							setGameId(++gameId);
						},2000);
						setTimeout(()=>{
							setSuccess(false);
						},3000);
					}
				}
				else{
					setTimeout(()=>{
						setCount(0);
						setImageId7(null);
						setImageId8(0);
						setId7(null);
						setId8(null);
					},500);
				}
			}
		}
	};
	return (
		<View style={styles.container}>
			{(success===false)&&<ImageBackground
				source={
					require("../../assets/backgroundImages/turnaroundBG.png")
				}
				style={styles.backgroundImage}
			>
				<Close fun={()=>{props.navigation.navigate("Dashboard");}}/>
				<View style={[styles.view,{marginLeft:"5%"}]}>
					{Tiles[gameId].map((tile,index)=>
						<View style={styles.map} key={index}>
							{	(index<=3)&&<View>
								{(id1==index||
                                id2==index||
                                id3==index||
                                id4==index||
                                id5==index||
                                id6==index||
                                id7==index||
                                id8==index)?
									<ImageBackground
										source={
											require("../../assets/back.png")
										}
										style={styles.upperLevelImage}
									>
										<Image
											source={tile}
											style={{
												height:100,
												width:90,
											}}
										/>
									</ImageBackground>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={styles.upperLevelView}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					)}
				</View>
				<View style={[styles.view,{marginRight:"27%",marginTop:"5%"}]}>
					{Tiles[gameId].map((tile,index)=>
						<View style={styles.map} key={index}>
							{	(index>=4&&index<=7)&&<View>
								{(id1==index||
						id2==index||
						id3==index||
						id4==index||
						id5==index||
						id6==index||
						id7==index||
						id8==index)?
									<View style={{borderRadius:20}}>
										<ImageBackground
											source={
												require(
													"../../assets/back.png"
												)
											}
											style={styles.lowerLevelImage}
										>
											<Image
												source={tile}
												style={{
													height:100,
													width:90,
												}}
											/>
										</ImageBackground>
									</View>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={styles.lowerLevelView}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					)}
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		flexDirection:"row",
	},
	lowerLevelView:{
		marginBottom:40,
		height:120,
		width:100,
		borderRadius:20,
		backgroundColor:"#cbfe00"
	},
	lowerLevelImage:{
		marginBottom:40,
		height:120,
		borderRadius:20,
		width:100,
		justifyContent:"center",
		alignItems:"center"
	},
	upperLevelView:{
		marginTop:40,
		height:120,
		width:100,
		borderRadius:20,
		backgroundColor:"#cbfe00"
	},
	upperLevelImage:{
		marginTop:40,
		height:120,
		width:100,
		justifyContent:"center",
		alignItems:"center"
	},
	map:{
		marginLeft:"5%",
	},
	view:{
		flexDirection:"row",
		width:"80%",
	},
	backgroundImage:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	gif:{
		height:"100%",
		width:"100%"
	}
});
TurnAround.propTypes={
	fun:PropTypes.any,
	navigation:PropTypes.any
};
export default TurnAround;
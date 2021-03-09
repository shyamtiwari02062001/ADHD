import React,{useState} from "react";
import { StyleSheet, View, TouchableOpacity,Image } from "react-native";
import Tiles from "../../constants/tiles";
const  TurnAround=()=>{
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
			<View style={{
				flexDirection:"row",
				justifyContent:"space-around",
				width:"80%"
			}}>
				{Tiles[0].map((tile,index)=>
					<View key={index} style={{
						justifyContent:"space-between",
						alignItems:"center",
						flexDirection:"column"
					}}>
						<View style={{marginLeft:"40%"}}>
							{	(index%2==0)&&<View>
								{(id1==index||
                                id2==index||
                                id3==index||
                                id4==index||
                                id5==index||
                                id6==index||
                                id7==index||
                                id8==index)?
									<Image
										source={tile}
										style={{height:150,width:120}}
									/>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={{
												height:150,
												width:120,
												backgroundColor:"red"
											}}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
						<View>
							{	(index%2!=0)&&<View>
								{(id1==index||
                                id2==index||
                                id3==index||
                                id4==index||
                                id5==index||
                                id6==index||
                                id7==index||
                                id8==index)?
									<Image
										source={tile}
										style={{height:150,width:120}}
									/>
									:<TouchableOpacity key={index}
										onPress={()=>{
											check(tile,index);
										}}>
										<View
											style={{
												height:150,
												width:120,
												backgroundColor:"red"
											}}
										/>
									</TouchableOpacity>}
							</View>
							}
						</View>
					</View>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		flexDirection:"row",
	},
});
export default TurnAround;
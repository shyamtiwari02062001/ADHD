import React,{useState} from "react";
import {View,ImageBackground,Image,Pressable} from "react-native";
const Button = (props) =>{
	const [sourceImage,setSouceImage]=useState(null);
	const [imageid,setImageID]=useState(0);
	return(
		<View>
			{(sourceImage!=imageid)&&
            <Pressable onPress={()=>{setSouceImage(props.source);
            setImageID(props.required);
            }}>
            	<Image source={props.source} style={{height:100,width:100}}/>
            </Pressable>
			}
			{(sourceImage==imageid)&&
            <ImageBackground source={props.source} style={{height:100,width:100}}>
            	<View style={{alignItems:"center",justifyContent:"center",flex:1}}>
            		<Image source={require("../../assets/tick.png")} style={{height:60,width:60,tintColor:"green"}}/>
            	</View>
            </ImageBackground>
			}
		</View>
	);
};
export default Button;
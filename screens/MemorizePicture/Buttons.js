import React,{useState} from "react";
import {View,Pressable,Image,StyleSheet} from "react-native";
import PropTypes from "prop-types";
import MemorizePic from "../../constants/MemorizePic";
const Buttons = (props) => {
	const [selected,setSelected]=useState(false);
	let count=0;
	let countAll=0;
	const check=(data)=>{
		if(selected==true){
			countAll=-1;
			setSelected(false);
			for(let i=0;i<MemorizePic[props.id][0];i++){
				if(data==MemorizePic[props.id][i+1]){
					count=-1;
				}
			}
		}
		if(selected==false){
			setSelected(true);
			countAll=1;
			for(let i=0;i<MemorizePic[props.id][0];i++){
				if(data==MemorizePic[props.id][i+1]){
					count=1;
				}
			}
		}
	};
	return(
		<View style={styles.container}>
			<Pressable onPress={()=>{
				check(props.source);
				props.fun(count,countAll);
			}}
			>
				{(selected===true)?<View style={styles.view}>
					<Image source={props.source} style={styles.img}/>
				</View>:
					<View>
						<Image source={props.source} style={styles.img}/>
					</View>
				}
			</Pressable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingLeft:5,
		paddingRight:5
	},
	view:{
		borderWidth:2,
		padding:2,
		borderRadius:20
	},
	img:{
		height:70,
		width:70
	}
});
Buttons.propTypes={
	source:PropTypes.any,
	fun:PropTypes.any,
	id:PropTypes.number
};
export default Buttons;
